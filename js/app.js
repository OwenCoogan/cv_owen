

document.addEventListener('DOMContentLoaded' , () => {



    

    const $ = () => {
        return document.querySelector(tagParam);


    };
   
    let burgerMenu = document.querySelector('#burgerMenu');
    let navigation= document.querySelector('nav');
    let navLinks = document.querySelectorAll('nav a');
    let navIsOpen =false;
    let mainTag = document.querySelector ('main');
    let contactForm = document.querySelector('main form');
    let userName = document.querySelector('[type="text"]');
    let userSubject = document.querySelector('[type="text"]');
    let userEmail = document.querySelector('[type="email"]');
    let userMessage = document.querySelector('textarea');
    let activePage = 'undefined';


    let newsletterForm= document.querySelector('footer form');
    let newsletterEmail = document.querySelector(' footer [type="email"]');

    const displayMenu = () => {


      

        burgerMenu.addEventListener ('click' , ( ) => {


            if( navIsOpen ===true ) {

                navigation.classList.remove('open');




            }

            else {
                navigation.classList.add('open');


            }

        
            navIsOpen = !navIsOpen;

        });


        

    };


 



    const mainNavigation = () => {


        for (let link of navLinks) {
            console.log ('click');
            link.addEventListener ('click' , (event) => {

            event.preventDefault();

            asyncFetch (link.getAttribute('href') );    

        


        });

        }

    };

    const asyncFetch =  async (pageHtml) => {

        const response = await fetch(`./partials/${pageHtml}`);
        const htmlResponse = await response.text();

        

        mainTag.innerHTML = htmlResponse;
        // Définir la page active

        activePage = pageHtml;

        // Verifier la page active pour capter le formulaire

        

    };

    

    contactForm.addEventListener( 'submit', (event) => {
        
        event.preventDefault();

        
        let formError = 0;

        




            if( userName.value.length > 2 ){
                console.log('Name OK');
            }
            else{
                
                alert("Veuillez saisir un Nom");
            
               
                formError++;
            };



            if( userEmail.value.length > 4 ){
                console.log('Email OK');

            }

            else{
                
                alert("Veuillez saisir un Email");               
                
                formError++;
            };




            if( userSubject.value.length > 2 ){
                console.log('Sujet OK');
            }
            else{
                
                alert("Veuillez saisir un Sujet");
            
               
                formError++;
            };


            if( userMessage.value.length > 2 ){
                console.log('Message OK');
            }
            else{
                
                alert("Veuillez saisir un Message");
            
               
                formError++;
            };

            
        

      
        
        
            if( formError === 0 ){
                
              console.log(userEmail.value,userMessage.value,userName.value,userSubject.value);
                

                
                userEmail.value = '';
              
                userMessage.value = '';
            }
        //
    });

    newsletterForm.addEventListener( 'submit', (event) => {
        
        event.preventDefault();

        
        let formError = 0;

        




            if( newsletterEmail.value.length > 2 ){
                console.log('Email OK');
            }
            else{
                
                alert("Veuillez saisir un Email");
            
               
                formError++;
            };                   
        
        
            if( formError === 0 ){
                
              console.log(newsletterEmail.value);
                

                
                newsletterEmail.value = '';
                
    
    
    
            }
    
            


            if (activePage === 'contact.html') {

            // Capter la soumission du formulaire
                contactForm();
                let contactForm =document.querySelector('form');
                console.log(contactForm);
        }
    });

    

        displayMenu();
        mainNavigation();





});