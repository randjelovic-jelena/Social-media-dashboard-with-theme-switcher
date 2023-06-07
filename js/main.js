'use strict';

const switchBtn=document.querySelector('#switch-btn');
const modeName=document.getElementById("mode-name");


const checkMode=(className)=>{
	const link=document.querySelector('head link[type="text/css"]');
	const path=link.getAttribute('href');

	if(className==='dark'){
		link.setAttribute("href", "css/styles-dark.css");
		modeName.innerText="Dark Mode";
	}
	else{
		link.setAttribute("href", "css/styles-light.css");
		modeName.innerText="Light Mode";
	}
}

switchBtn.addEventListener('click',()=>{

	const className=switchBtn.getAttribute('class');
	switchBtn.removeAttribute('class');
	let newVal='';

	if(className==='dark'){
		switchBtn.classList.add('light');
		newVal='light';
	}
	else{
		switchBtn.classList.add('dark');
		newVal='dark';
	}

	checkMode(newVal);
});

window.onload=()=>{
	const element = document.createElement("link");
	element.setAttribute("rel", "stylesheet");
	element.setAttribute("type", "text/css");
	element.setAttribute("href", "css/styles-dark.css");
	document.querySelector('head').appendChild(element);
}