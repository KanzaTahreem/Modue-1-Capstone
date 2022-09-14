window.onload = () => {
  const barMenu = document.querySelector('.bar-menu');
  const popUp = document.querySelector('.pop-up');
  const close = document.querySelector('.close');
  const mainMenu = document.querySelector('.main-menu');
  const contactForm = document.querySelector('.contact-section');
  const contactUs = document.querySelector('.contact-us');

  barMenu.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  });

  mainMenu.addEventListener('click', () => {
    popUp.classList.add('hidden');
  });

  const featuredSpeakers = [
    {
      src: './images/speakers-images/speaker_01.png',
      title: 'Yochai Benkler',
      subtitle: 'Berkman Professor of Enterpreneurial Legal studies at Harvard Law School',
      desc: 'Benkler studies commons-based peer production, and punlished his seminal book. The wealth of Networks in 2006',
    },
    {
      src: './images/speakers-images/speaker_02.png',
      title: 'Kilnam Chon',
      subtitle: 'Professor at Korea Advanced Institute of Science and Technology (KAIST)',
      desc: "Developed Asia's first Internet protocol network SDN and led Korea's first private line Internet connection.",
    },
    {
      src: './images/speakers-images/speaker_03.png',
      title: 'SohYeong Noh',
      subtitle: 'Director at Art Center Nabi',
      desc: 'The author of Digital Art of Our Time. Opened "Art Center Nabi" in 2000.',
    },
    {
      src: './images/speakers-images/speaker_04.png',
      title: 'Julia Reda',
      subtitle: 'Head of Young Pirates of Europe',
      desc: 'European integration and online youth participation in politics and democracy are marjor concerns.',
    },
    {
      src: './images/speakers-images/speaker_05.png',
      title: 'Lila Tretikov',
      subtitle: 'Seceratory General of Wikimedia Foundation',
      desc: ' Geberal seceratory of Wikimedia Foundation, a non-profit orhanization that runs Wikipedia.',
    },
    {
      src: './images/speakers-images/speaker_06.png',
      title: 'Ryan Merkley',
      subtitle: 'Former Mozilla Foundation COO',
      desc: ' Led open source projects at thr Mozilla Foundation. He has been active in open movements such as open goverenment and open source.',
    },
  ];

  const speakerCardString = featuredSpeakers.map((speaker) => `
    <div class="speaker-card d-flex mb-5 align-items-center">
      <div class="speaker-img">
        <img 
        src="${speaker.src}" 
        alt="speaker"
        />
      </div>
      <div class="speaker-card-details d-flex flex-column">
        <h3 class="speaker-title">${speaker.title}</h3>
        <p class="speaker-qualification brand-color m-0">
            ${speaker.subtitle}
        </p>
        <span class="speaker-underline"></span>
        <p class="speaker-desc">
          ${speaker.desc}
         </p>
      </div>
    </div>
  `);

  const parser = new DOMParser();

  speakerCardString.forEach((projectString) => {
    const speakerElement = parser.parseFromString(projectString, 'text/html').body.firstChild;
    const speakerDetails = document.querySelector('.speaker-details');
    speakerDetails.append(speakerElement);
  });

  const contactCard = `
  <div class="contact-popup-hidden ">
    <div class="contact-background"></div>
      <div class="contact-form">
        <i class="fa-solid fa-xmark contact-close"></i>
        <h2 class="d-flex flex-column justify-content-center align-items-center">
            CONTACT US
        </h2>
        <form action="https://formspree.io/f/mjvzkyre" method="post" id="form">
          <label hidden for="text"> Name </label>
          <div class="name-div d-flex mb-4">
            <i class="fa-solid fa-user"></i>
            <input
              type="text"
              id="text"
              name="text"
              maxlength="30"
              placeholder="Enter your name"
              required
            />
          </div>
  
          <label hidden for="text"> Email</label>
          <div class="email-div d-flex mb-4">
            <i class="fa-solid fa-paper-plane"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
  
          <label hidden for="text"> Add your coment</label>
          <div class="comment-div d-flex mb-5">
            <i class="fa-solid fa-message"></i>
            <textarea
              name="comment"
              id="comment"
              maxlength="500"
              placeholder="Write your message here"
              required
            >
            </textarea>
          </div>
  
          <button type="submit" class="form-btn">Get In Touch</button>
          <span class="message"></span>
        </form>
      </div>
    </div>
    `;

  const contactElement = parser.parseFromString(contactCard, 'text/html').body.firstChild;

  const closeBtn = contactElement.querySelector('.contact-close');

  contactUs.addEventListener('click', () => {
    contactElement.classList.toggle('contact-popup-hidden');
  });

  closeBtn.addEventListener('click', () => {
    contactElement.classList.toggle('contact-popup-hidden');
  });

  contactForm.append(contactElement);
};