<script>
	let { children } = $props();
	import logo from '$lib/assets/images/logo.png';
</script>
<style>
button.navbar-toggler {
    display: none;
}
.collapse:not(.show) {
    display: flex;
	
}
.outer-header
{
	    display: flex;
    align-items: center;
    justify-content: space-between;
	    width: 100%;
	
}
.navbar-nav
{
	    display: flex;
    align-items: center;
    flex-direction: inherit;
    column-gap: 39px;

}
div#navbarSupportedContent {
    margin-left: auto;
    float: right;
    flex-grow: initial;
    flex-basis: auto;
}
ul.navbar-nav li a {
    color: #000000;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 800;
}
.contact-btn button {
    background: #FFC600;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 800;
    border: 0;
    padding: 6px 20px;
    margin-left: 30px;
}
.header {
    padding: 14px 0 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
	z-index:9;
}
@media (max-width:767px)
{
	.navbar-brand img {
    max-width: 127px;
}
button.navbar-toggler {
    display: block;
	    background: #fec600;
        padding: 2px 2px;
		    outline: none;
    box-shadow: none !important;
}
.collapse:not(.show) {
    display: none;
}
button.navbar-toggler i
{
	    position: relative;
    top: 5px;
	
}
div#navbarSupportedContent {
    
    position: absolute;
    background: #fffdf0;
    top: 78px;
    left: 0;
    right: 0;
    padding: 15px 22px 22px;
    box-shadow: 0 0 10px 1px #ddd;
}
.navbar-nav {
    flex-direction: column;
    column-gap: 41px;
	align-items: flex-start;
}
.contact-btn button {
    margin-left: 0;
    margin-top: 11px;
}
.navbar {
    position: static;
}
.header {
    padding: 0px 0 0;
}
}
</style>


<div class="header">
	<div class="container">
	<nav class="navbar">
  <div class="outer-header">
    <a class="navbar-brand" href="#"><img src={logo} alt=""/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Shop Now</a>
        </li>
		  <li class="nav-item">
          <a class="nav-link" href="#">f.a.qs</a>
        </li>
		  <li class="nav-item">
          <a class="nav-link" href="#">Benefits</a>
        </li>
       
      </ul>
      <div class="contact-btn">
	  	<button>contact us</button>
	  </div>
    </div>
  </div>
</nav>
	</div>
	</div>
	

{@render children()}