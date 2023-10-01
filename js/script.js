let mobileBurgerCloseBtn = document.querySelector(".burger-menu__close-trigger--mobile"),
	mobileBurgerMenu = document.querySelector(".burger-menu--mobile"),
	mobileBurgerMenuOpenBtn = document.querySelector(".burger-menue-trigger--mobile"),

	desctopBurgerMenuOpenBtn = document.querySelector(".burger-menu-trigger--desctop"),
	desctopBurgerCloseBtn = document.querySelector(".burger-menu-desctop__close-trigger"),
	desctopBurgerMenu = document.querySelector(".burger-menu--desctop");

mobileBurgerCloseBtn.addEventListener("click", e=>{
	mobileBurgerMenu.classList.toggle("burger-menu--mobile-hidden");
});

mobileBurgerMenuOpenBtn.addEventListener("click", e=>{
	mobileBurgerMenu.classList.toggle("burger-menu--mobile-hidden");
});


desctopBurgerMenuOpenBtn.addEventListener("click", e=>{
	desctopBurgerMenu.classList.toggle("burger-menu-desctop--hidden");
});

desctopBurgerCloseBtn.addEventListener("click", e=>{
	desctopBurgerMenu.classList.toggle("burger-menu-desctop--hidden");
});


window.addEventListener('resize', (e)=>{
    let width = document.body.clientWidth;
    if(
    	width>370 && 
    	!mobileBurgerMenu.classList.contains("burger-menu--mobile-hidden")
    ){
		mobileBurgerMenu.classList.toggle("burger-menu--mobile-hidden");
    }else if(
    	width<=370 &&
    	!desctopBurgerMenu.classList.contains("burger-menu-desctop--hidden")
    ){
		desctopBurgerMenu.classList.toggle("burger-menu-desctop--hidden");
    };
});
