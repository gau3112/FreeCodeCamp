let content = [
    {img:`https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg`,
    name:"Susan Smith",
    job:"Web Developer",
    review:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},

    {img:`https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg`,
    name:"Anna Johnson",
    job:"WEB DESIGNER",
    review:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},

    {img:`https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg`,
    name:"Peter Jones",
    job:"Intern",
    review:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},

    {img:`https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg`,
    name:"Bill Anderson",
    job:"THE BOSS",
    review:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."}
];

var currIndex = 0;
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let supriseButton = document.querySelector('.suprise_me');


/* Get Article Parameter */
let image = document.querySelector('.person_image');
let name = document.querySelector('name');
let job_title = document.querySelector('job_title');
let docReview = document.querySelector('review');

function changeElement(){
    image.setAttribute("src",content[currIndex].img);
    name.innerText = `${content[currIndex].name}`;
    job_title.innerText = `${content[currIndex].job}`;
    docReview.innerText = `${content[currIndex].review}`;
}

function previous(){
    if (currIndex===0){
        currIndex = content.length;
    }
    currIndex-=1;
    changeElement();
}

function next(){
    if (currIndex===content.length-1){
        currIndex = -1;
    }
    currIndex+=1;
    changeElement();
}

function suprise(){
    let getIndex = Math.floor(Math.random()*(content.length-1));
    currIndex = getIndex;
    changeElement();
}

prevButton.addEventListener('click',previous);
nextButton.addEventListener('click',next);
supriseButton.addEventListener('click',suprise);