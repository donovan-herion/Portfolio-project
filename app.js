// French translation
let fr = document.querySelector('.fr')

fr.addEventListener('click', () => {
  let frFlag = document.querySelector('.fr');
  let enFlag = document.querySelector('.em-gb');

  frFlag.style.display = 'none';
  enFlag.style.display = 'block';


  let landingPageSrc1 = document.querySelector('.landing-page-src1');
  let landingPageSrc2 = document.querySelector('.landing-page-src2');
  let landingPageSrc3 = document.querySelector('.landing-page-src3');

  landingPageSrc1.innerHTML = 'Bonjour! <i class="em em-wave" aria-role="presentation" aria-label="WAVING HAND SIGN"></i>';

  landingPageSrc2.innerHTML = 'Je suis <strong>Donovan Herion</strong><br>un développeur front-end <br> specialisé dans la construction<br>de belles interfaces<br>& expériences pour le web <i class="em em-male-technologist" aria-role="presentation" aria-label=""></i>';

  landingPageSrc3.innerHTML = 'Contactez-moi <i class="em em-point_right" aria-role="presentation" aria-label="WHITE RIGHT POINTING BACKHAND INDEX"></i> <span>donovanherion@gmail.com</span>';

  let valuesPageSrc1 = document.querySelector('.values-page-src1');

  let value1 = document.querySelector('.value1');
  let value2 = document.querySelector('.value2');
  let value3 = document.querySelector('.value3');
  let value4 = document.querySelector('.value4');

  valuesPageSrc1.innerHTML = 'Mes valeurs et le développement web'

  value1.innerHTML = '<i class="em em-man-raising-hand" aria-role="presentation" aria-label=""></i><h4>Développement</h4><p>En tant que front end developer j\'écris le code non visible qui pourtant est primordial dans l\'élaboration d\'un site web.</p>';

  value2.innerHTML = '<i class="em em-pencil2" aria-role="presentation" aria-label="PENCIL"></i><h4>Design</h4><p>Le rendu final est important !<br>Le design est généralement la raison principale qui pousse un visiteur à revenir sur votre site.</p>';

  value3.innerHTML = '<i class="em em-gift_heart" aria-role="presentation" aria-label="HEART WITH RIBBON"></i><h4>Passion</h4><p>De nature intéressé par la technologie et les challenges, je m\'épanouis pleinement dans le domaine du developpement web.</p>';

  value4.innerHTML = '<i class="em em-smiley" aria-role="presentation" aria-label="SMILING FACE WITH OPEN MOUTH"></i><h4>Positivité</h4><p>Sourire est totalement gratuit pour mon plus grand bonheur mais aussi pour les personnes ayant la chance de me cotoyer au travail comme dans la vie de tous les jours !</p>';

  let projectsPageSrc1 = document.querySelector('.projects-page-src1');

  projectsPageSrc1.innerHTML = 'Mes précédents projets';

  let formGrid = document.querySelector('.form-grid');

  formGrid.innerHTML = '<h2 class="title">Envoyez moi un message!</h2><input class="name" placeholder="Votre nom" type="text" name="name"><input class="email" placeholder="Votre email" type="email" name="name"><textarea class="text" placeholder="Votre message ici..." type="text" name="text"></textarea><input class="submit btn btn-success" type="submit" name="text" value="Envoyer" style="font-family: \'fira mono\';">';
})

//English translation

let en = document.querySelector('.em-gb');

en.addEventListener('click', () => {

  let frFlag = document.querySelector('.fr');
  let enFlag = document.querySelector('.em-gb');

  frFlag.style.display = 'block';
  enFlag.style.display = 'none';

  let landingPageSrc1 = document.querySelector('.landing-page-src1');
  let landingPageSrc2 = document.querySelector('.landing-page-src2');
  let landingPageSrc3 = document.querySelector('.landing-page-src3');

  landingPageSrc1.innerHTML = 'Hello! <i class="em em-wave" aria-role="presentation" aria-label="WAVING HAND SIGN"></i>';

  landingPageSrc2.innerHTML = 'I\'m <strong>Donovan Herion</strong> a front-end <br> developer focused on building <br> beautiful interfaces <br> & experiences for the web <i class="em em-male-technologist" aria-role="presentation" aria-label=""></i>';

  landingPageSrc3.innerHTML = 'Get in touch <i class="em em-point_right" aria-role="presentation" aria-label="WHITE RIGHT POINTING BACKHAND INDEX"></i> <span>donovanherion@gmail.com</span>';

  let valuesPageSrc1 = document.querySelector('.values-page-src1');

  let value1 = document.querySelector('.value1');
  let value2 = document.querySelector('.value2');
  let value3 = document.querySelector('.value3');
  let value4 = document.querySelector('.value4');

  valuesPageSrc1.innerHTML = 'The values I bring to the web'

  value1.innerHTML = '<i class="em em-man-raising-hand" aria-role="presentation" aria-label=""></i><h4>development</h4><p>As a front end developer I write the code that users don\'t always see or care about even though this is a major thing in the process of creating a website.</p>';

  value2.innerHTML = '<i class="em em-pencil2" aria-role="presentation" aria-label="PENCIL"></i><h4>Design</h4><p>The look of a website matters !<br>Most of the time this is gonna represent the main reason why a user would like to come back for some more.</p>';

  value3.innerHTML = '<i class="em em-gift_heart" aria-role="presentation" aria-label="HEART WITH RIBBON"></i><h4>Passion</h4><p>I strongly believe that being a pro tech guy and the fact that I am a challenge type of person together allow me to enjoy what I do in my daily life.</p>';

  value4.innerHTML = '<i class="em em-smiley" aria-role="presentation" aria-label="SMILING FACE WITH OPEN MOUTH"></i><h4>Positivism</h4><p>Smiling is free and has the hability to spread good vibes which is something that I can\'t prevent from happening if you\'re in my presence.</p>';

  let projectsPageSrc1 = document.querySelector('.projects-page-src1');

  projectsPageSrc1.innerHTML = 'My previous projects';

  let formGrid = document.querySelector('.form-grid');

  formGrid.innerHTML = '<h2 class="title">Drop me a message!</h2><input class="name" placeholder="Your name" type="text" name="name"><input class="email" placeholder="Your email" type="email" name="name"><textarea class="text" placeholder="Enter your message here..." type="text" name="text"></textarea><input class="submit btn btn-success" type="submit" name="text" value="Send" style="font-family: \'fira mono\';">';

});

// White background function

let sun = document.querySelector('.em-sunny');

sun.addEventListener('click', () => {

  sun.style.display = "none";

  let moon = document.querySelector('.em-full_moon');
  moon.style.display = "block";

  let body = document.querySelector('body');
  body.style.backgroundColor = "white";
  body.style.color = "black";

  let hideUpFinger = document.querySelector('.hide-up-finger');
  hideUpFinger.style.backgroundColor = "white";

  let scrollDownBlack1 = document.querySelector('.sD1');
  scrollDownBlack1.style.display = "none";

  let scrollDownWhite1 = document.querySelector('.sD2');
  scrollDownWhite1.style.display = "block";

  let scrollDownBlack2 = document.querySelector('.sD3');
  scrollDownBlack2.style.display = "none";

  let scrollDownWhite2 = document.querySelector('.sD4');
  scrollDownWhite2.style.display = "block";

  let scrollDownBlack3 = document.querySelector('.sD5');
  scrollDownBlack3.style.display = "none";

  let scrollDownWhite3 = document.querySelector('.sD6');
  scrollDownWhite3.style.display = "block";


  let formGridBackground = document.querySelector('.form-grid');
  formGridBackground.style.backgroundColor = "#171C28";

  let formGridCircleBorder = document.querySelector('.cercle');
  formGridCircleBorder.style.border = "1px solid #171C28";

  let formGridH2 = document.querySelector('.title');
  formGridH2.style.color = "white";

});

// black background function

let moon = document.querySelector('.em-full_moon');

moon.addEventListener('click', () => {

  moon.style.display = "none";

  let sun = document.querySelector('.em-sunny');
  sun.style.display = "block";

  let body = document.querySelector('body');
  body.style.backgroundColor = "#171C28";
  body.style.color = "white";

  let hideUpFinger = document.querySelector('.hide-up-finger');
  hideUpFinger.style.backgroundColor = "#171C28";

  let scrollDownBlack1 = document.querySelector('.sD1');
  scrollDownBlack1.style.display = "block";

  let scrollDownWhite1 = document.querySelector('.sD2');
  scrollDownWhite1.style.display = "none";

  let scrollDownBlack2 = document.querySelector('.sD3');
  scrollDownBlack2.style.display = "block";

  let scrollDownWhite2 = document.querySelector('.sD4');
  scrollDownWhite2.style.display = "none";

  let scrollDownBlack3 = document.querySelector('.sD5');
  scrollDownBlack3.style.display = "block";

  let scrollDownWhite3 = document.querySelector('.sD6');
  scrollDownWhite3.style.display = "none";

  let formGridBackground = document.querySelector('.form-grid');
  formGridBackground.style.backgroundColor = "white";

  let formGridCircleBorder = document.querySelector('.cercle');
  formGridCircleBorder.style.border = "1px solid #171C28";

  let formGridH2 = document.querySelector('.title');
  formGridH2.style.color = "black";

});
