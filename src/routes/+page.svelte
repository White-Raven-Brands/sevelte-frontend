<script lang="ts">
  import right from "$lib/assets/images/right.svg";
  import logo from "$lib/assets/images/logo.png";
  import whatone from "$lib/assets/images/what-one.svg";
  import whattwo from "$lib/assets/images/what-two.svg";
  import whatthree from "$lib/assets/images/what-three.svg";
  import rateimg from "$lib/assets/images/rateimg.png";
  import camone from "$lib/assets/images/camone.svg";
  import rdarow from "$lib/assets/images/rdarow.svg";
  import fb from "$lib/assets/images/fb.svg";
  import insta from "$lib/assets/images/insta.svg";
  import accord from "$lib/assets/images/accord.png";
  import plus from "$lib/assets/images/plus.svg";
  import minus from "$lib/assets/images/minus.svg";

  import { z } from "zod";
  import { contactFormSchema, sanityClient, urlFor } from "$lib/sanity";
    // import { sendMail } from "$lib/server/email-config";

  // Initialize form data
  let formData = {
    first_name: "",
    last_name: "",
    email: "",
    phnoe_number: "",
    company_name: "",
    company_address: "",
    service_requested: "",
    what_are_you_storing: "",
    pallets_number: "",
    average_wxlxh_of_pallets: "",
    total_weight: "",
    storage_start_date: undefined,
    storage_end_date: undefined,
    need_other_services: "",
    additional_info: "",
  };

  // Validation errors object
  let errors: Record<string, string> = {};
  let submissionMessage = "";
  let submissionStatus: "success" | "error" | null = null;

  // Validate form function
  function validateForm() {
    try {
      // Clear previous errors
      errors = {};

      // Safely convert dates, only if they are not undefined
      const processedFormData = {
        ...formData,
        storage_start_date: formData.storage_start_date
          ? new Date(formData.storage_start_date)
          : undefined,
        storage_end_date: formData.storage_end_date
          ? new Date(formData.storage_end_date)
          : undefined,
      };

      // Validate the processed form data
      contactFormSchema.parse(processedFormData);
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Transform Zod errors into a more usable format
        console.log(err);
        err.errors.forEach((error) => {
          if (error.path.length > 0) {
            errors[error.path[0]] = error.message;
          }
        });
      }
      return false;
    }
  };

  async function handleSendEmail(email) {
    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Email sent successfully:', result);
      } else {
        console.error('Error sending email:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Form submission handler
  async function handleSubmit() {
    // Reset previous messages
    submissionMessage = "";
    submissionStatus = null;

    // Validate form first
    if (validateForm()) {
      try {
        console.log(formData);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            storage_start_date: formData.storage_start_date
              ? new Date(formData.storage_start_date).toISOString()
              : null,
            storage_end_date: formData.storage_end_date
              ? new Date(formData.storage_end_date).toISOString()
              : null,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          // Success scenario
          submissionMessage = "Form submitted successfully!";
          submissionStatus = "success";
          handleSendEmail(formData.email)
          setTimeout(() => {
            submissionMessage = "";
            // messageElement.style.display = "none";
          }, 4000);

          // Reset form after successful submission
          formData = {
            first_name: "",
            last_name: "",
            email: "",
            phnoe_number: "",
            company_name: "",
            company_address: "",
            service_requested: "",
            what_are_you_storing: "",
            pallets_number: "",
            average_wxlxh_of_pallets: "",
            total_weight: "",
            storage_start_date: undefined,
            storage_end_date: undefined,
            need_other_services: "",
            additional_info: "",
          };
          errors = {};
        } else {
          // Error handling for server-side issues
          submissionMessage = result.error || "Submission failed";
          submissionStatus = "error";
        }
      } catch (error) {
        console.error("Submission error:", error);
        submissionMessage = "An unexpected error occurred";
        submissionStatus = "error";
      }
    } else {
      // Validation failed
      submissionMessage = "Please correct the form errors";
      submissionStatus = "error";
    }
  }

  let mainSectioncontent = null;
  let mainSectionImage = null;
  async function fetchMainSection() {
    try {
      const result = await sanityClient.fetch('*[_type == "main-section"][0]');

      mainSectioncontent = result;
      console.log(urlFor(result.main_image).url());
      mainSectionImage=urlFor(result.main_image).url();
    } catch (error) {
      console.error("Error fetching storage settings:", error);
    }
  }
  fetchMainSection();

  let whatWeDo = null;
  async function fetchWhatWeDo() {
    try {
      const result = await sanityClient.fetch('*[_type == "what-we-do"][0]');

      whatWeDo = result;
    } catch (error) {
      console.error("Error fetching storage settings:", error);
    }
  }
  fetchWhatWeDo();
  let storageRates = null;
  let our_rate_image=null;
  async function fetchStorageRates() {
    try {
      const result = await sanityClient.fetch('*[_type == "storageRates"][0]');
      our_rate_image=urlFor(result?.our_rates_image).url();
      storageRates = result;
    } catch (error) {
      console.error("Error fetching storage settings:", error);
    }
  }
  fetchStorageRates();

  let shippingRates = null;
  async function fetchShippingRates() {
    try {
      const result = await sanityClient.fetch('*[_type == "shippingRates"][0]');

      shippingRates = result;
    } catch (error) {
      console.error("Error fetching storage settings:", error);
    }
  }
  fetchShippingRates();

  let shippingSurcharges = null;
  async function fetchShippingSurcharges() {
    try {
      const result = await sanityClient.fetch(
        '*[_type == "shippingSurcharges"][0]',
      );

      shippingSurcharges = result;
    } catch (error) {
      console.error("Error fetching storage settings:", error);
    }
  }
  fetchShippingSurcharges();
  let faqs = null;
  let faq_img=null;
  async function fetchFaqs() {
    try {
      const result = await sanityClient.fetch('*[_type == "faqs"][0]');
      faq_img= urlFor(result?.faq_image).url();
      faqs = result;
    } catch (error) {
      console.error("Error fetching storage settings:", error);
    }
  }
  fetchFaqs();
  let benefits = null;
  async function fetchbenefits() {
    try {
      const result = await sanityClient.fetch('*[_type == "benefits"][0]');
      // console.log(result);
      benefits = result;
    } catch (error) {
      console.error("Error fetching storage settings:", error);
    }
  }
  fetchbenefits();
</script>


<div class="page-body">
  <section class="banner-section" style="--background-url: url({mainSectionImage});" >
    <style>
      .banner-section::before {
        background-image: var(--background-url);
      }
    </style>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="left-banner">
            <h2>
              {mainSectioncontent?.beforeColored} <span>{mainSectioncontent?.Colored_content}</span><br /> {mainSectioncontent?.afterColored}
              <!-- {mainSectioncontent} -->
            </h2>
            <div class="banner-links">
              <a href="#se-our-rate"
                >see our rates <img src={right} alt="" />
              </a>
              <a href="#pickup-form">pickup form <img src={right} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="what-we-do" class="what-we-do">
    <div class="container">
      <h3>What we do</h3>
      <p>
        {whatWeDo?.content}
      </p>
      <div class="row">
        <div class="col-md-4">
          <div class="what-do-inner">
            <img src={whatone} alt="" />
            <h5>{whatWeDo?.firstHeading}</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="what-do-inner">
            <img src={whattwo} alt="" />
            <h5>{whatWeDo?.secondHeading}</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="what-do-inner">
            <img src={whatthree} alt="" />
            <h5>{whatWeDo?.thirdHeading}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="se-our-rate" class="our-rate">
    <div class="container">
      <h3>Our Rates</h3>
      <hr />
      <div class="row">
        <div class="col-md-3">
          <div class="rate-left">
            <img src={our_rate_image} alt="" />
          </div>
        </div>

        <div class="col-md-9">
          <div class="rate-right">
            <div class="row">
              <div class="col-md-7">
                <div class="rate-block">
                  <h5>{storageRates?.heading}</h5>
                  <p>
                    {storageRates?.description[0]?.children[0].text}
                  </p>
                  <p>
                    {storageRates?.description[1]?.children[0].text}
                  </p>
                  <h6>No handling fees!</h6>
                </div>
              </div>
              <div class="col-md-5">
                <div class="rate-pattles">
                  {#each storageRates?.rateOptions as option}
                    <h4>{option.title}</h4>
                    <h5>{option.price}</h5>
                    <a href="#pickup-form"
                      >{option.ctaText} <img src={right} alt="" /></a
                    >
                  {/each}

                  <!-- <h4>pallets up to 96” h</h4>
                  <h5>$60 <span>/month</span></h5>
                  <a href="#">buy space now <img src={right} alt="" /></a> -->
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7">
                <div class="rate-block">
                  <h5>{shippingRates?.heading}</h5>
                  {#each shippingRates?.description as description}
                    <p>
                      {description?.children[0].text}
                    </p>
                  {/each}
                  <!-- <p>
                    {shippingRates?.description[1]?.children[0].text}
                  </p>
                  <p>
                    The Pallet Hut can receive less than container loads (LCL),
                    or full container/trailer loads (FCL), and store the
                    palletized items until you are ready to move them again.
                    When you are, complete the ship request form we’ll have your
                    pallets moving within 1 business day.
                  </p> -->
                </div>
              </div>
              <div class="col-md-5">
                <div class="rate-pattles">
                  {#each shippingRates?.rateDetails as rate}
                    <h4>{rate.title}</h4>
                    <h5>{rate.price}</h5>
                  {/each}
                  <!-- <h4>additional pallets</h4>
                  <h5>$45 <span>/each</span></h5> -->
                  <a href="#pickup-form"
                    >move pallets now <img src={right} alt="" /></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="shipping-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="shipping-left"></div>
        </div>
        <div class="col-md-9">
          <div class="shipping-right">
            <h3>{shippingSurcharges?.heading}:</h3>
            <ul>
              <li class="item-heading">
                <span class="text-upper">Items</span>
                <span class="text-upper">Item Fee</span>
                <span class="text-upper">Location surcharges:</span>
                <span class="text-upper">Fee</span>
              </li>
              {#each shippingSurcharges?.surcharges as item}
                <li>
                  <span>{item.item}</span>
                  <span>{item.itemFee}</span>
                  <span>{item.locations.join(", ")}</span>
                  <span>{item.locationFee}</span>
                </li>
              {/each}
              <!--<li>
                <span>Power tailgate</span>
                <span>Add $25</span>
                <span>Tsawwassen, UBC, SFU</span>
                <span>Add $20</span>
              </li>
              <li>
                <span>Power tailgate</span>
                <span>Add $25</span>
                <span>Tsawwassen, UBC, SFU</span>
                <span>Add $20</span>
              </li>
              <li>
                <span>Power tailgate</span>
                <span>Add $25</span>
                <span>Tsawwassen, UBC, SFU</span>
                <span>Add $20</span>
              </li>
              <li>
                <span>Power tailgate</span>
                <span>Add $25</span>
                <span>Tsawwassen, UBC, SFU</span>
                <span>Add $20</span>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section  id="faqs" class="faqs-sec">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="faq-left">
            <h3>{faqs?.heading}</h3>
            <div class="accordion" id="accordionExample">
              {#each faqs?.questions as item, index}
                <div class="accordion-item">
                  <h2 class="accordion-header" id={`headingOne${index}`}>
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseOne-${index}`}
                      aria-expanded="true"
                      aria-controls={`collapseOne${index}`}
                    >
                      {item.question}
                      <span class="plus"><img src={plus} alt="" /></span>
                      <span class="minus"><img src={minus} alt="" /></span>
                    </button>
                  </h2>
                  <div
                    id={`collapseOne-${index}`}
                    class="accordion-collapse collapse"
                    aria-labelledby={`headingOne${index}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>{item.answer}</strong>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="accordion-image">
            <img src={faq_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="benefits" class="benifits-sec">
    <div class="container">
      <h3>{benefits?.heading}:</h3>
      <div class="row">
        {#each benefits?.benefitItems as item}
          <div class="col-md-4">
            <div class="benifit-inner">
              <img class='benefits-icn' src={urlFor(item.icon).url()} alt="" />
              <h4 class="benefits-title">{item.title}</h4>
            </div>
          </div>
        {/each}
        <!-- <div class="col-md-4">
          <div class="benifit-inner">
            <img src={camone} alt="" />
            <h4>Fire <br /> protection</h4>
          </div>
        </div>
        <div class="col-md-4">
          <div class="benifit-inner">
            <img src={camone} alt="" />
            <h4>Climate controlled <br />Storage</h4>
          </div>
        </div>

        <div class="col-md-4">
          <div class="benifit-inner">
            <img src={camone} alt="" />
            <h4>Sealed warehouse<br /> (no partitioning)</h4>
          </div>
        </div>
        <div class="col-md-4">
          <div class="benifit-inner">
            <img src={camone} alt="" />
            <h4>Restricted access<br /> (staff members only)</h4>
          </div>
        </div>
        <div class="col-md-4">
          <div class="benifit-inner">
            <img src={camone} alt="" />
            <h4>Centralized Location in<br /> Metro Vancouver</h4>
          </div>
        </div> -->
      </div>
    </div>
  </section>

  <section id="pickup-form" class="contact-from">
    <div class="container">
      <div class="contact-head">
        <h3>General <br />Contact Form</h3>
        <ul>
          <li class="active"><span>contact form</span></li>
          <li><span>pickup form</span></li>
        </ul>
      </div>

      <!-- <form>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="First Name"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="Company Name"/>
                            </div>
                        </div>


                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="Phone #"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="Email Address"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="Company Address"/>
                            </div>
                        </div>



                        <div class="col-md-4">
                            <div class="form-group">
                               <select>
                               <option>Service Requested</option>
                                <option>Service Requested</option>
                                 <option>Service Requested</option>
                               </select>
                        </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="What are you storing?"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="Number of Pallets"/>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="Average WxLxH of pallets"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="Approx. Total Weight"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="Approx. Storage Start Date"/>
                            </div>
                        </div>

                         <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="APPROX. STORAGE END DATE"/>
                            </div>
                        </div>
                         <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" placeholder="NEED OTHER SERVICES?"/>
                            </div>
                        </div>

 <div class="col-md-12">
                            <div class="form-group">
                               <textarea placeholder="ADDITIONAL INFO"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                            <button type="submit">submit form <img src={rdarow} alt=""/></button>
                            </div>
                        </div>


                    </div>
                </form> -->
      <form on:submit|preventDefault={handleSubmit}>
        <div class="row">
          <!-- First Name -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="text"
                placeholder="First Name"
                bind:value={formData.first_name}
              />
              {#if errors.first_name}
                <span class="error">{errors.first_name}</span>
              {/if}
            </div>
          </div>

          <!-- Last Name -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="text"
                placeholder="Last Name"
                bind:value={formData.last_name}
              />
              {#if errors.last_name}
                <span class="error">{errors.last_name}</span>
              {/if}
            </div>
          </div>

          <!-- Company Name -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="text"
                placeholder="Company Name"
                bind:value={formData.company_name}
              />
            </div>
          </div>

          <!-- Phone -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="text"
                placeholder="Phone #"
                bind:value={formData.phnoe_number}
              />
              {#if errors.phnoe_number}
                <span class="error">{errors.phnoe_number}</span>
              {/if}
            </div>
          </div>

          <!-- Email -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="text"
                placeholder="Email Address"
                bind:value={formData.email}
              />
              {#if errors.email}
                <span class="error">{errors.email}</span>
              {/if}
            </div>
          </div>

          <!-- Company Address -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="text"
                placeholder="Company Address"
                bind:value={formData.company_address}
              />
            </div>
          </div>

          <!-- Service Requested -->
          <div class="col-md-4">
            <div class="form-group">
              <select bind:value={formData.service_requested}>
                <option value="">Select Service Area</option>
                <option value="us-north">US-North</option>
                <option value="us-south">US-South</option>
                <option value="us-east">US-East</option>
              </select>
              {#if errors.service_requested}
                <span class="error">{errors.service_requested}</span>
              {/if}
            </div>
          </div>

          <!-- Stored Item -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="text"
                placeholder="What are you storing?"
                bind:value={formData.what_are_you_storing}
              />
              {#if errors.what_are_you_storing}
                <span class="error">{errors.what_are_you_storing}</span>
              {/if}
            </div>
          </div>

          <!-- Pallet Count -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="number"
                placeholder="Number of Pallets"
                bind:value={formData.pallets_number}
              />
              {#if errors.pallets_number}
                <span class="error">{errors.pallets_number}</span>
              {/if}
            </div>
          </div>

          <!-- Pallet Dimensions -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="text"
                placeholder="Avg Pallet Dimensions (WxLxH)"
                bind:value={formData.average_wxlxh_of_pallets}
              />
            </div>
          </div>

          <!-- Total Weight -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="number"
                placeholder="Total Weight"
                bind:value={formData.total_weight}
              />
              {#if errors.total_weight}
                <span class="error">{errors.total_weight}</span>
              {/if}
            </div>
          </div>

          <!-- Storage Start Date -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="date"
                placeholder="Storage Start Date"
                bind:value={formData.storage_start_date}
              />
            </div>
          </div>

          <!-- Storage End Date -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="date"
                placeholder="Storage End Date"
                bind:value={formData.storage_end_date}
              />
            </div>
          </div>

          <!-- Additional Services -->
          <div class="col-md-4">
            <div class="form-group">
              <input
                type="text"
                placeholder="Need Other Services?"
                bind:value={formData.need_other_services}
              />
            </div>
          </div>

          <!-- Additional Info -->
          <div class="col-md-12">
            <div class="form-group">
              <textarea
                placeholder="Additional Information"
                bind:value={formData.additional_info}
              ></textarea>
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <button type="submit">Submit Form</button>
            </div>
          </div>
        </div>

        <!-- Submission Message -->
        {#if submissionMessage}
          <div
            class="submission-message"
            class:success={submissionStatus === "success"}
            class:error={submissionStatus === "error"}
          >
            {submissionMessage}
          </div>
        {/if}
      </form>
    </div>
  </section>

  <footer class="footer-main">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="footer-left">
            <img src={logo} alt="" />
            <p>161-3231 No. 6 Road. Richmond, BC <br /> Canada, V6V 1P6</p>
          </div>
        </div>
        <div class="col-md-8">
          <div class="footer-right">
            <ul>
              <li><a href="#">about</a></li>
              <!-- <li><a href="#">Shop Now</a></li> -->
              <li><a href="#faqs">f.a.qs</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#pickup-form">contact us</a></li>
            </ul>
            <div class="sociallink">
              <p>storage @pallethut.ca</p>
              <p>250-250-2500(tbd)</p>
              <!-- <div class="social">
                <a href="#"><img src={fb} alt="" /> </a>
                <a href="#"><img src={insta} alt="" /> </a>
              </div> -->
            </div>
            <span class="social-cirlce">Website by the social circle</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

<style>
  section.banner-section {
    background: #fffdf0;
    padding: 230px 0 130px;

    background-repeat: no-repeat;
    background-position: top right;
    position: relative;
  }
  section.banner-section::before {
    content: "";
    position: absolute;
    /* background-image: url("$lib/assets/images/banerbox.png"); */
    /* background-image: url({main}); */
    background-repeat: no-repeat;
    bottom: -230px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-position: bottom right;
    pointer-events: none;
  }
  section.shipping-sec {
    padding: 50px 0;
    background-image: url("$lib/assets/images/zip.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -130px;
  }
  section.our-rate {
    background: #fffdf0;
    padding: 50px 0 70px;
  }
  section.our-rate h3 {
    color: #1f1919;
    font-size: 36px;
    font-weight: 900;
    text-transform: uppercase;
    display: inline-block;
    background: #fffdf0;
    padding: 0 92px 0 0;
  }
  section.our-rate hr {
    margin: -30px 0 48px;
    background: #8ab8b5;
    height: 2px;
    opacity: 1;
  }
  .rate-block h5 {
    color: #8ab8b5;
    font-size: 26px;
    font-weight: 900;
    text-transform: uppercase;
  }
  .rate-block p {
    color: #000000;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 18px;
    max-width: 370px;
  }
  .rate-block h6 {
    color: #1f1919;
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
  }
  .rate-right .row {
    border-bottom: 2px solid #8ab8b5;
    padding-bottom: 45px;
    margin-bottom: 50px;
  }
  .rate-right .row:last-child {
    border-bottom: 0px solid #8ab8b5;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
  .rate-right {
    padding-left: 32px;
  }
  .left-banner h2 {
    font-size: 50px;
    font-weight: 900;
    text-transform: uppercase;
  }
  .left-banner h2 span {
    color: #ffc600;
  }
  .shipping-right h3 {
    color: #fffdf0;
    font-size: 18px;
    font-weight: 900;
    /* text-transform: uppercase; */
  }
  
  .banner-links {
    display: flex;
    align-items: center;
    column-gap: 50px;
    margin-top: 26px;
  }
  .banner-links a {
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    color: #1f1919;
    font-weight: 900;
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
  section.what-we-do {
    padding: 110px 0;
    background-size: cover;
    background-image: url("$lib/assets/images/abbk.png");
  }
  section.what-we-do h3 {
    font-size: 26px;
    color: #fffdf0;
    font-weight: 900;
    text-transform: uppercase;
  }
  section.what-we-do p {
    color: #fffdf0;
    font-size: 16px;
    max-width: 380px;
    margin: 15px 0 100px;
  }
  .what-do-inner h5 {
    font-size: 26px;
    color: #ffc600;
    font-weight: 900;
    text-transform: uppercase;
    margin: 23px 0 0;
    max-width: 330px;
  }
  .rate-pattles h4 {
    text-transform: uppercase;
    color: #1f1919;
    font-size: 22px;
    font-weight: 900;
  }
  .rate-pattles h5 {
    color: #8ab8b5;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 13px 0;
  }
  .rate-pattles h5 span {
    font-size: 16px;
  }
  .rate-pattles a {
    color: #1f1919;
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .rate-pattles h4 {
    border-top: 2px solid #8ab8b5;
    padding-top: 25px;
    margin-top: 25px;
  }
  .rate-pattles h4:first-child {
    border-top: 0px solid #8ab8b5;
    padding-top: 0px;
    margin-top: 0px;
  }
  .shipping-right ul {
    padding: 0;
    margin: 18px 0 0;
  }
  .shipping-right ul li {
    color: #fff;
    font-size: 17px;
    /* text-transform: uppercase; */
    list-style: none;
    display: flex;
    align-items: center;
  }
  .shipping-right ul li span {
    border: 1px solid #fff;
    padding: 12px 10px 12px 20px;
    text-align: left;
    /* text-transform: none !important; */
  }
  .text-upper{
    text-transform: uppercase;
  }
  .shipping-right ul li:first-child span {
    border: 0;
    padding-left: 0;
    color: #8ab8b5;
    font-weight: 900;
    font-size: 20px;
  }
  .shipping-right ul li span:first-child {
    width: 27%;
  }
  .shipping-right ul li span:nth-child(2) {
    width: 21%;
    text-align: center;
  }
  .shipping-right ul li span:nth-child(3) {
    width: 38%;
  }
  .shipping-right ul li span:nth-child(4) {
    text-align: center;
    width: 14%;
  }
  section.benifits-sec {
    padding: 70px 0;
    background: #1f1919;
  }
  .benifit-inner h4 {
    min-height: 70px;
    padding-left: 6px;
    color: #fffdf0;
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
  }
  .benifit-inner img {
    margin: 0 auto 36px;
    display: table;
  }
  .benifits-sec .col-md-4 {
    padding: 0;
  }
  .benifit-inner {
    border: 1px solid #ffc60082;
    border-top: 0;
    border-right: 0;
    padding: 53px 0;
  }
  .benifits-sec .row {
    margin: 0;
    border-top: 1px solid #ffc60082;
    border-right: 1px solid #ffc60082;
  }
  section.benifits-sec h3 {
    color: #fffdf0;
    font-size: 26px;
    font-weight: 900;
    margin-bottom: 34px;
    text-transform: uppercase;
  }
  .shipping-right {
    padding-left: 32px;
  }
  section.faqs-sec {
    background: #fffdf0;
    padding: 75px 0;
  }
  section.faqs-sec h3 {
    color: #1f1919;
    font-size: 36px;
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 16px;
  }
  section.faqs-sec .accordion-item {
    background-color: transparent;
    border: 0;
  }
  section.faqs-sec .accordion-button {
    background-color: transparent;
    color: #1f1919;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 900;
    padding-right: 40px;
    border-bottom: 1px solid #be4d3b;
    border-radius: 0 !important;
    padding-left: 0;
    padding-top: 42px;
    outline: none;
    box-shadow: none;
  }
  section.faqs-sec .accordion-button span {
    position: absolute;
    right: 0;
    bottom: 17px;
  }
  section.faqs-sec .accordion-body {
    padding: 21px 0 0;
  }
  .collapsed span.minus {
    display: none;
  }
  section.faqs-sec .accordion-button::after {
    position: absolute;
    right: 0;
    top: 42px;
    display: none;
  }
  .accordion-image {
    padding-left: 50px;
  }
  .accordion-image img {
    width: 100%;
  }
  .faq-left {
    padding-right: 61px;
  }
  section.contact-from {
    background: #fffdf0;
    padding: 75px 0;
  }
  section.contact-from h3 {
    font-size: 36px;
    color: #1f1919;
    font-weight: 900;
    text-transform: uppercase;
  }
  .contact-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ab493a;
    padding-bottom: 36px;
    margin-bottom: 50px;
  }
  .contact-head ul {
    padding: 0;
    margin: 0;
    display: flex;
    column-gap: 29px;
  }
  .contact-head ul li {
    list-style: none;
  }
  .contact-head ul li span {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 900;
    color: #1f1919;
    opacity: 0.4;
    border-bottom: 2px solid;
    padding-bottom: 4px;
  }
  .contact-head ul li.active span {
    color: #ab493a;
    opacity: 1;
    border-color: #ab493a;
  }

  .contact-from .form-group input {
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    color: #000000;
    border: 0;
    background: transparent;
    outline: none;
    border-bottom: 2px solid #ab493a;
    width: 100%;
    padding: 7px 0;
  }
  .contact-from .form-group {
    margin-bottom: 27px;
  }
  .contact-from .form-group select {
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    color: #000000;
    border: 0;
    background: transparent;
    outline: none;
    border-bottom: 2px solid #ab493a;
    width: 100%;
    padding: 7px 0;
  }
  .contact-from .form-group input::placeholder {
    color: #000;
    opacity: 1; /* Firefox */
  }

  .contact-from .form-group input::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: #000;
  }
  .contact-from .form-group textarea {
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    color: #000000;
    border: 0;
    background: transparent;
    outline: none;
    border: 2px solid #ab493a;
    width: 100%;
    padding: 13px;
    height: 164px;
    resize: none;
  }
  .contact-from .form-group textarea::placeholder {
    color: #000;
    opacity: 1; /* Firefox */
  }

  .contact-from .form-group textarea::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: #000;
  }
  .contact-from .form-group button {
    background: #1f1919;
    border: 0;
    color: #fff;
    padding: 9px 22px;
    text-transform: uppercase;
    font-weight: 800;
    margin-left: auto;
    float: right;
    display: flex;
    align-items: center;
    column-gap: 15px;
    font-size: 12px;
  }

  footer.footer-main {
    padding: 60px 0;
    background: #1f1919;
  }
  .footer-left p {
    color: #fffdf0;
    font-size: 10px;
    margin: 22px 0 0;
    opacity: 0.5;
  }
  .footer-right ul {
    display: flex;
    justify-content: flex-end;
    column-gap: 36px;
    padding: 0 0 24px;
    border-bottom: 1px solid #ffc600;
  }
  .footer-right ul li {
    list-style: none;
  }
  .footer-right ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 15px;
  }
  .footer-right ul li:last-child a {
    background: #ffc600;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 800;
    border: 0;
    padding: 6px 20px;
    color: #000;
  }
  .footer-right {
    max-width: 560px;
    margin-left: auto;
  }
  .sociallink {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sociallink p {
    margin: 0;
    color: #fffdf0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 900;
  }
  .social {
    display: flex;
    align-items: center;
    column-gap: 13px;
  }
  span.social-cirlce {
    color: #fffdf0;
    opacity: 0.3;
    font-size: 10px;
    margin: 18px 0 0;
    display: table;
  }

  @media (max-width: 767px) {
    section.banner-section {
      padding: 110px 0 130px;
    }
    .left-banner h2 {
      font-size: 26px;
    }
    section.banner-section::before {
      bottom: -111px;
      background-size: 210px;
    }
    .banner-links a {
      font-size: 13px;
    }
    section.what-we-do {
      padding: 80px 0px 20px;
    }
    section.what-we-do h3 {
      font-size: 24px;
    }
    section.what-we-do p {
      font-size: 15px;
      margin: 13px 0 29px;
    }
    .what-do-inner h5 {
      font-size: 16px;
      margin: 14px 0 34px;
      max-width: 230px;
    }
    section.our-rate {
      padding: 40px 0 40px;
    }
    section.our-rate h3 {
      font-size: 23px;
      padding: 0 30px 0 0;
    }
    section.our-rate hr {
      margin: -21px 0 33px;
    }
    .rate-left img {
      width: 100%;
      height: 341px;
      object-fit: cover;
      margin-bottom: 21px;
    }
    .rate-right {
      padding-left: 0;
    }
    section.shipping-sec {
      margin-top: 0;
    }
    .rate-right .row {
      padding-bottom: 35px;
      margin-bottom: 38px;
    }
    .rate-block h5 {
      font-size: 23px;
    }
    .rate-pattles h4 {
      font-size: 20px;
    }
    .shipping-right {
      padding-left: 0;
    }
    .shipping-right ul li:first-child span {
      font-size: 10px;
    }
    .shipping-right ul li {
      font-size: 10px;
    }
    .shipping-right ul li span {
      border: 1px solid #ffffff52;
      padding: 12px 3px 12px 5px;
      border-right: 0;
      border-bottom: 0;
    }
    .shipping-right ul {
      border-bottom: 1px solid #ffffff52;
      border-right: 1px solid #ffffff52;
    }
    section.faqs-sec {
      padding: 35px 0;
    }
    section.faqs-sec h3 {
      font-size: 25px;
      margin-bottom: 0;
    }
    .faq-left {
      padding-right: 0;
    }
    section.faqs-sec .accordion-button {
      font-size: 15px;
    }
    .accordion-image {
      padding-left: 0;
      padding-top: 30px;
    }
    section.benifits-sec {
      padding: 40px 0;
    }
    section.benifits-sec h3 {
      font-size: 23px;
      margin-bottom: 27px;
    }
    .benifit-inner h4 {
      font-size: 16px;
    }
    .benifit-inner {
      padding: 35px 0;
    }
    section.contact-from {
      padding: 37px 0;
    }
    .contact-head {
      flex-wrap: wrap;
    }
    section.contact-from {
      font-size: 24px;
    }
    .contact-head ul {
      margin: 17px 0 0;
    }
    .contact-head {
      border-bottom: 0;
      padding-bottom: 2px;
      margin-bottom: 34px;
      flex-wrap: wrap;
    }

    footer.footer-main {
      padding: 40px 0;
    }
    .footer-right ul {
      justify-content: center;
      column-gap: 12px;
      padding: 17px 0 16px;
    }
    .footer-right ul li a {
      font-size: 12px;
    }
    .footer-right ul li:last-child a {
      font-size: 12px;
      padding: 6px 8px;
    }
    .footer-left p,
    .footer-left {
      text-align: center;
    }
    .sociallink p {
      font-size: 11px;
    }
    .social {
      column-gap: 7px;
    }

    .error {
      color: red;
      font-size: 0.8rem;
      margin-top: 5px;
    }
  }

  .error {
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;
  }

  .submission-message {
    margin-top: 15px;
    padding: 10px;
    border-radius: 5px;
  }

  .submission-message.success {
    background-color: #dff0d8;
    color: #3c763d;
  }

  .submission-message.error {
    background-color: #f2dede;
    color: #a94442;
  }
  .benefits-icn{
    background: #ffc600;
    padding: 18px;
    height: 70px;
    width:70px;
  }
  .benefits-title {
    max-width: 288px;
    margin: 0 auto;
  }
 
</style>
