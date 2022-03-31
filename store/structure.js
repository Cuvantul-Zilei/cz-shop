export const state = () => ({
  title: "Cuvântul zilei",
  menu: [
    // {
    //   label: "Acasă",
    //   // url: "/",
    //   href: "/",
    // },
    // {
    //   label: "Glosar",
    //   // url: "/sustine",
    //   href: "/glosar",
    // },
    // {
    //   label: "Sugerează",
    //   // url: "/sustine",
    //   href: "/sugereaza",
    // },
    // {
    //   label: "Susține",
    //   // url: "/sustine",
    //   href: "/sustine",
    // }
  ],
  smLinks: [
      {
          site: 'facebook',
          type: 'filled',
          url: 'https://facebook.com/cuvantulzilei.ro'
      },
      {
          site: 'instagram',
          type: 'filled',
          url: 'https://instagram.com/cuvantulzilei.ro'
      },
  ],
  toolsList: [
    // icoane: 
    {
      icon: 'bullhorn',
      title: 'Social Media',
      description: 'Follow us pe social media și vei găsi câte un cuvânt nou zilnic direct la tine în feed'
    },
    {
      icon: 'comments',
      title: 'Mesaje SMS',
      description: 'Te poți abona la SMS-uri zilnice în fiecare dimineață dacă nu folosești social media în mod regulat'
    },
    {
      icon: 'laptop-phone',
      title: 'iOS / Android app',
      description: 'Aplicația mobilă te va ține la curent cu toate noutățile în materie de limba română și vei primi zilnic notificări despre cuvântul zilei'
    },
    {
      icon: 'mailchimp',
      title: 'Email newsletter',
      description: 'SMS e prea old-school pentru tine? Abonează-te la cuvântul zilei pe email în fiecare dimineață dacă așa îți place ție'
    },
    {
      icon: 'bubble',
      title: 'Whatsapp / Messenger Chatbot',
      description: 'Ce zici dacă ai primi cuvântul zilei de la un chatbot AI în aplicația ta de chat preferată, precum Whatsapp sau Messenger?'
    },
    {
      icon: 'code',
      title: 'API',
      description: 'Vrei să accesezi cuvântul zilei în mod programatic? Utilizatorii tăi ar fi încântați de puțină trivia direct în aplicația ta'
    }
  ]
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
};
