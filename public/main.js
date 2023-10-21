const context = {
    title: 'Welcome to Musicon',
    body: 'Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!',
    title_school:
    "Musicon School of Music",
    body_school:
    "As one of the comprehensive and acclaimed institutions for music studies, The Guitar Store School of Music plays a key role in educating performers, scholars, and music educators who influence music performance and education around the region. The essence of great music school is it's faculty, full-time renown qualified instructors and scholars. In addition, many musicians and scholars come to the school to give master classes and guest lecures.The breadth and number of performance opportunities are unparalleled in music study, with the school offering more than 50 showcases and performances a year. The school facilities, located in the heart of Cheras, Taman Segar, comprise a recital hall, more than 10 practice rooms, choral and instrumental rehearsal rooms, and more than 10 studios. The grandest facility is 552 The Stage, which features technical capabilities and warm welcoming performing stage. Nevertheless, the school offers for more than 20 different music courses alongside the supportive examination boards such as ABRSM, Rockshool, Trinity College of London and Trinity Rock & Pop. For those who are passionate to grow music with us, let your journey begin here!",

    instruments: [
      {
        image: './img/electronic-keyboard.png',
        name: 'Electronic Keyboard',
        description: 'A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
        price: '$1,999.00',
        sale: '$1,699.89'
      },
      {
        image: './img/electric-guitar.png',
        name: 'Electric Guitar',
        description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.',
        price: '$599.99'
      },
      {
        image: './img/bass-guitar.png',
        name: 'Bass Guitar',
        description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
        price: '$624.99'
      },
      {
        image: './img/drum-kit.png',
        name: 'Drum Kit',
        description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
        price: '$649.00',
        sale: '$349.00'
      },
      {
        image: "./img/violin.png",
        name: "Violin",
        description: "A versatile instrument that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.",
        price: "$245.00"
      },
      {
        image: "./img/guitar2.jpg",
        name: "Classic Guitar",
        description: "A classical guitar is an acoustic instrument, often smaller than the common Dreadnought guitar, that is strung with nylon strings as opposed to steel. Many different musical styles are played on a classical guitar, such as folk, flamenco, and classical style.",
        price: "$99.00"
      }
    ]
  };

const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource );
const compiledHtml = template(context);
document.getElementById("information").innerHTML = compiledHtml;
