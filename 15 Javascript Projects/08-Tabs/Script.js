let historyBtn = document.querySelector('.history');
let visionBtn = document.querySelector('.vision');
let goalBtn = document.querySelector('.goals');
let content = document.querySelector('.box');
let navBackground = document.querySelector('.nav');

function removeAll(){
    historyBtn.style.backgroundColor = "transparent";
    visionBtn.style.backgroundColor = "transparent";
    goalBtn.style.backgroundColor = "transparent";
}
historyBtn.addEventListener('click',function(){
    removeAll();
    historyBtn.style.backgroundColor = "white";
    content.innerHTML = `<h4>History</h4>
    <p>I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.</p>`
});

visionBtn.addEventListener('click',function(){
    removeAll();
    visionBtn.style.backgroundColor = "white";
    content.innerHTML = `<h4>Vision</h4>
    <p>Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.</p>
    <ul>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
    </ul>`
});

goalBtn.addEventListener('click',function(){
    removeAll();
    goalBtn.style.backgroundColor = "white";
    content.innerHTML = `<h4>Goals</h4>
    <p>Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.</p>`
});
