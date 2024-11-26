<script>
	import right from '$lib/assets/images/right.svg';
    	import logo from '$lib/assets/images/logo.png';
    import whatone from '$lib/assets/images/what-one.svg';
    import whattwo from '$lib/assets/images/what-two.svg';
    import whatthree from '$lib/assets/images/what-three.svg';
    import rateimg from '$lib/assets/images/rateimg.png';
    import camone from '$lib/assets/images/camone.svg';
    import rdarow from '$lib/assets/images/rdarow.svg';
    import fb from '$lib/assets/images/fb.svg';
     import insta from '$lib/assets/images/insta.svg';
    import accord from '$lib/assets/images/accord.png';
    import plus from '$lib/assets/images/plus.svg';
     import minus from '$lib/assets/images/minus.svg';
</script>
<style>
section.banner-section {
    background: #FFFDF0;
    padding: 230px 0 130px;
    
    background-repeat: no-repeat;
    background-position: top right;
    position:relative;
}
section.banner-section::before
{
    content:"";
    position:absolute;
    background-image: url("$lib/assets/images/banerbox.png");
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
    background: #FFFDF0;
      padding: 50px 0 70px;
}
section.our-rate h3
{
    color: #1F1919;
    font-size: 36px;
    font-weight: 900;
    text-transform: uppercase;
    display: inline-block;
    background: #fffdf0;
    padding: 0 92px 0 0;
}
section.our-rate hr
{
        margin: -30px 0 48px;
    background: #8AB8B5;
    height: 2px;
    opacity: 1;
}
.rate-block h5 {
    color: #8AB8B5;
    font-size: 26px;
    font-weight: 900;
    text-transform: uppercase;
}
.rate-block p
{
        color: #000000;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 18px;
        max-width: 370px;
}
.rate-block h6 {
    color: #1F1919;
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
}
.rate-right .row {
    border-bottom: 2px solid #8AB8B5;
    padding-bottom:45px;
    margin-bottom: 50px;
}
.rate-right .row:last-child
{
        border-bottom: 0px solid #8AB8B5;
    padding-bottom: 0px;
    margin-bottom: 0px;
}
.rate-right
{
    padding-left:32px;
}
.left-banner h2 {
    font-size: 50px;
    font-weight: 900;
    text-transform: uppercase;
}
.left-banner h2 span {
    color: #FFC600;
}
.shipping-right h3 {
    color: #FFFDF0;
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
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
    color: #1F1919;
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
section.what-we-do h3
{
font-size:26px;
color:#FFFDF0;
font-weight:900;
 text-transform: uppercase;
}
section.what-we-do p
{
    color:#FFFDF0;
    font-size: 16px;
       max-width: 380px;
    margin: 15px 0 100px;
}
.what-do-inner h5 {
    font-size: 26px;
    color: #FFC600;
    font-weight: 900;
    text-transform: uppercase;
    margin: 23px 0 0;
    max-width: 330px;
}
.rate-pattles h4 {
    text-transform: uppercase;
    color: #1F1919;
    font-size: 22px;
    font-weight: 900;
}
.rate-pattles h5 {
    color: #8AB8B5;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
        margin: 13px 0;
}
.rate-pattles h5 span {
    font-size: 16px;
}
.rate-pattles a
{
    color:#1F1919;
    font-size: 14px;
     font-weight: 900;
    text-transform: uppercase;
    text-decoration:none;
        display: flex;
    align-items: center;
    column-gap: 10px;

}
.rate-pattles h4 {
    border-top: 2px solid #8AB8B5;
    padding-top: 25px;
    margin-top: 25px;
}
.rate-pattles h4:first-child {
    border-top: 0px solid #8AB8B5;
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
    text-transform: uppercase;
    list-style: none;
    display: flex;
    align-items: center;
}
.shipping-right ul li span {
    border: 1px solid #fff;
    padding: 12px 10px 12px 20px;
    text-align: left;
}
.shipping-right ul li:first-child span {
    border: 0;
    padding-left: 0;
    color: #8AB8B5;
    font-weight: 900;
    font-size: 20px;
}
.shipping-right ul li span:first-child
{
width:27%;
}
.shipping-right ul li span:nth-child(2)
{
width:21%;
text-align:center;
}
.shipping-right ul li span:nth-child(3)
{
width:38%;
}
.shipping-right ul li span:nth-child(4)
{
    text-align:center;
width:14%;
}
section.benifits-sec{
    padding: 70px 0;
    background: #1F1919;
}
.benifit-inner h4
{
color:#FFFDF0;
font-size:18px;
font-weight:900;
    text-transform: uppercase;
    text-align: center;
}
.benifit-inner img
{
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
    color: #FFFDF0;
    font-size: 26px;
    font-weight: 900;
    margin-bottom: 34px;
    text-transform: uppercase;
}
.shipping-right {
    padding-left: 32px;
}
section.faqs-sec {
    background: #FFFDF0;
    padding: 75px 0;
}
section.faqs-sec h3 {
    color: #1F1919;
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
        color: #1F1919;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 900;
    padding-right: 40px;
    border-bottom: 1px solid #BE4D3B;
    border-radius: 0 !important;
    padding-left: 0;
    padding-top: 42px;
        outline: none;
    box-shadow: none;
}
section.faqs-sec .accordion-button span
{
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
section.faqs-sec  .accordion-button::after {
    position: absolute;
    right: 0;
    top: 42px;
    display:none;
}
.accordion-image {
    padding-left: 50px;
}
.accordion-image img {
    width:100%
}
.faq-left {
    padding-right: 61px;
}
section.contact-from {
    background: #FFFDF0;
    padding: 75px 0;
}
section.contact-from h3 {
    font-size: 36px;
    color: #1F1919;
    font-weight: 900;
    text-transform: uppercase;
}
.contact-head
{
    display:flex;
       align-items: center;
    justify-content: space-between;
        border-bottom: 2px solid #AB493A;
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
.contact-head ul li span
{
        font-size: 16px;
    text-transform: uppercase;
    font-weight: 900;
    color: #1F1919;
    opacity: 0.4;
    border-bottom: 2px solid;
    padding-bottom: 4px;
}
.contact-head ul li.active span
{
    color: #AB493A;
    opacity:1;
    border-color:#AB493A;
}

.contact-from .form-group input {
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    color: #000000;
    border: 0;
    background: transparent;
    outline: none;
    border-bottom: 2px solid #AB493A;
    width: 100%;
    padding: 7px 0;
}
.contact-from .form-group 
{
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
    border-bottom: 2px solid #AB493A;
    width: 100%;
    padding: 7px 0;
}
.contact-from .form-group input::placeholder {
  color: #000;
  opacity: 1; /* Firefox */
}

.contact-from .form-group input::-ms-input-placeholder { /* Edge 12 -18 */
   color: #000;
}
.contact-from .form-group textarea
{
     font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    color: #000000;
    border: 0;
    background: transparent;
    outline: none;
    border: 2px solid #AB493A;
    width: 100%;
    padding: 13px;
    height:164px;
    resize:none;
}
.contact-from .form-group textarea::placeholder {
  color: #000;
  opacity: 1; /* Firefox */
}

.contact-from .form-group textarea::-ms-input-placeholder { /* Edge 12 -18 */
   color: #000;
}
.contact-from .form-group button {
    background: #1F1919;
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
    background: #1F1919;
}
.footer-left p {
    color: #FFFDF0;
    font-size: 10px;
    margin: 22px 0 0;
    opacity: 0.5;
}
.footer-right ul
{
      display: flex;
    justify-content: flex-end;
    column-gap: 36px;
       padding: 0 0 24px;
    border-bottom: 1px solid #FFC600;
}
.footer-right ul li
{
    list-style: none;
}
.footer-right ul li a
{
        color: #fff;
    text-decoration: none;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 15px;
}
.footer-right ul li:last-child a
{
    background: #FFC600;
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
.sociallink p
{
        margin: 0;
    color: #FFFDF0;
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
    color: #FFFDF0;
    opacity: 0.3;
    font-size: 10px;
    margin: 18px 0 0;
    display: table;
}

@media (max-width:767px)
{
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
section.what-we-do p{
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
.rate-left img
{
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
.shipping-right ul
{
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
.footer-left p, .footer-left {
    text-align: center;
}
.sociallink p {
    font-size: 11px;
}
.social {
    column-gap: 7px;
}
}
</style>
<div class="page-body">
    <section class="banner-section">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="left-banner">
                        <h2>We’ll <span>store your<br/> PALLETIZED ITEMS</span><br/> until you are ready<br/> for them</h2>
                        <div class="banner-links">
                            <a href="#">see our rates <img src={right} alt=""/> </a>
                             <a href="#">pickup form <img src={right} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="what-we-do">
     <div class="container">
        <h3>What we do</h3>
        <p>No contract, month-to-month, palletized storage near Vancouver (just off Bridgeport Rd. in Richmond)</p>
        <div class="row">
            <div class="col-md-4">
                <div class="what-do-inner">
                    <img src={whatone} alt=""/>
                    <h5>Unloading and Uploading</h5>
                </div>
            </div>
            <div class="col-md-4">
                <div class="what-do-inner">
                    <img src={whattwo} alt=""/>
                    <h5>Storage<br/> solutions</h5>
                </div>
            </div>
            <div class="col-md-4">
                <div class="what-do-inner">
                    <img src={whatthree} alt=""/>
                    <h5>Same Day Local Delivery and Pick Up</h5>
                </div>
            </div>
        </div>
     </div>
    </section>

     <section class="our-rate">
     <div class="container">
     <h3>Our Rates</h3>
     <hr/>
     <div class="row">
        <div class="col-md-3">
            <div class="rate-left">
                <img src={rateimg} alt=""/>
            </div>
        </div>

         <div class="col-md-9">
            <div class="rate-right">
                <div class="row">
                     <div class="col-md-7">
                        <div class="rate-block">
                            <h5>storage Rates</h5>
                            <p>Rates are prorated to the end of the week (cycles over every Sunday) after a minimum of 1 month.</p>
                            <p>Oversized pallet storage available for items such as furniture, building supplies, and more. Contact us for a quote.</p>
                            <h6>No handling fees!</h6>
                        </div>
                    </div>
                     <div class="col-md-5">
                        <div class="rate-pattles">
                        <h4>pallets up to 52” h </h4>
                        <h5>$45 <span>/month</span></h5>
                        <a href="#">buy space now <img src={right} alt=""/></a>

                         <h4>pallets up to 96” h </h4>
                        <h5>$60 <span>/month</span></h5>
                        <a href="#">buy space now <img src={right} alt=""/></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                     <div class="col-md-7">
                        <div class="rate-block">
                            <h5>Shipping Rates</h5>
                            <p>Local pickup or delivery within Metro Vancouver available (includes Vancouver, Richmond, Burnaby, Delta, Surrey, North Shore, Langley, Coquitlam, Port Coquitlam, Maple Ridge, Port Moody, White Rock)</p>
                            <p>Same day service with notice by 9:00 am and delivery by 5:00 pm. </p>
                            <p>The Pallet Hut can receive less than container loads (LCL), or full container/trailer loads (FCL), 
                            and store the palletized items until you are ready to move them again. When you are, complete the ship request 
                            form we’ll have your pallets moving within 1 business day.</p>
                    
                        </div>
                    </div>
                     <div class="col-md-5">
                        <div class="rate-pattles">
                        <h4>your first pallet </h4>
                        <h5>$75</h5>

                        <h4>additional pallets </h4>
                        <h5>$45 <span>/each</span></h5>
                        <a href="#">move pallets now <img src={right} alt=""/></a>
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
            <div class="shipping-left">
               
            </div>
         </div>
         <div class="col-md-9">
            <div class="shipping-right">
                <h3>Shipping surcharges:</h3>
                <ul>
                <li>
                    <span>Items</span>
                    <span>Item Fee</span>
                    <span>Location surcharges:</span>
                    <span>Fee</span>
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
              
                </ul>

            </div>
         </div>
    </div>
     </div>
        </section>

           <section class="faqs-sec">
        <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
            <div class="faq-left">
            <h3>F.a.qs</h3>
                    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        do you store oversized items?
        <span class="plus"><img src={plus} alt=""/></span>
        <span class="minus"><img src={minus} alt=""/></span>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       do you accept less than a container load (lcl) and full container loads (fcl)?
       <span class="plus"><img src={plus} alt=""/></span>
        <span class="minus"><img src={minus} alt=""/></span>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What is your minimum storage time?
        <span class="plus"><img src={plus} alt=""/></span>
        <span class="minus"><img src={minus} alt=""/></span>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

   <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        am i allowed to acces my pallet while it is stored?
        <span class="plus"><img src={plus} alt=""/></span>
        <span class="minus"><img src={minus} alt=""/></span>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
            </div>
            <div class="col-md-6">
            <div class="accordion-image">
                <img src={accord} alt=""/>
            </div>
            </div>
        </div>
            
        </div>
        </section>

        <section class="benifits-sec">
            <div class="container">
                <h3>Other benefits to The Pallet Hut:</h3>
                <div class="row">
                    <div class="col-md-4">
                        <div class="benifit-inner">
                             <img src={camone} alt=""/>
                             <h4>24/7 security <br/> surveillance via CCTV</h4>
                        </div>
                    </div>
                     <div class="col-md-4">
                        <div class="benifit-inner">
                             <img src={camone} alt=""/>
                             <h4>Fire <br/> protection</h4>
                        </div>
                    </div>
                     <div class="col-md-4">
                        <div class="benifit-inner">
                             <img src={camone} alt=""/>
                             <h4>Climate controlled <br/>Storage</h4>
                        </div>
                    </div>

                     <div class="col-md-4">
                        <div class="benifit-inner">
                             <img src={camone} alt=""/>
                             <h4>Sealed warehouse<br/> (no partitioning)
</h4>
                        </div>
                    </div>
                     <div class="col-md-4">
                        <div class="benifit-inner">
                             <img src={camone} alt=""/>
                             <h4>Restricted access<br/> (staff members only)
</h4>
                        </div>
                    </div>
                     <div class="col-md-4">
                        <div class="benifit-inner">
                             <img src={camone} alt=""/>
                             <h4>Centralized Location in<br/> Metro Vancouver</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact-from">
            <div class="container">
                <div class="contact-head">
                    <h3>General <br/>Contact Form</h3>
                    <ul>
                    <li class="active"><span>contact form</span></li>
                    <li><span>pickup form</span></li>
                    </ul>
                </div>
                <form>
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
                </form>
            </div>
        </section>

        <footer class="footer-main">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="footer-left">      
                        <img src={logo} alt=""/>    
                        <p>161-3231 No. 6 Road. Richmond, BC <br/> Canada, V6V 1P6              
                        </div>
                    </div>
                     <div class="col-md-8">
                        <div class="footer-right">
                        <ul>
                            <li><a href="#">about</a></li>
                            <li><a href="#">Shop Now</a></li>
                            <li><a href="#">f.a.qs</a></li>
                            <li><a href="#">Benefits</a></li>
                            <li><a href="#">contact us</a></li>
                        </ul>  
                        <div class="sociallink">
                            <p>storage @pallethut.ca</p>
                            <p>250-250-2500(tbd)</p>
                            <div class="social">
                                <a href="#"><img src={fb} alt=""/> </a>
                                 <a href="#"><img src={insta} alt=""/> </a>
                            </div>
                        </div> 
                        <span class="social-cirlce">Website by the social circle</span>   
                        </div>
                        </div>
                </div>
            </div>
        </footer>

     
</div>
