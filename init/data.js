const travelSpots = [
  {
    title: "Paris Adventure",
    description:
      "Explore the romantic city of Paris with its iconic landmarks like the Eiffel Tower and Louvre Museum.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmrOswpAHznWegPzBImyaARXkF8Yk0goIDyRmBu2Grtnn7KsHSdMI6SSmul_-p",
    price: 1200,
    location: "Paris",
    country: "France",
  },
  {
    title: "Tropical Paradise",
    description:
      "Relax on the pristine beaches of Maldives and enjoy the crystal-clear blue waters.",
    image:
      "https://images.unsplash.com/photo-1562594212-f6243aa9b451?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyb3BpY2FsJTIwcGFyYWRpc2V8ZW58MHx8MHx8fDA%3D",
    price: 2500,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "New York City Escape",
    description:
      "Experience the bustling energy of New York City, visit Times Square, and take a stroll in Central Park.",
    image:
      "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldyUyMHlvcmslMjBjaXR5fGVufDB8fDB8fHww ",
    price: 1800,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Paris Adventure",
    description:
      "Explore the romantic city of Paris with its iconic landmarks like the Eiffel Tower and Louvre Museum.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSi7Nmg6F8mvkxj692DoPSBDIte4mvpTfKE41Zwz9ObOioQvyVxeEimBONnrPlk",
    price: 1200,
    location: "Paris",
    country: "France",
  },
  {
    title: "Tropical Paradise",
    description:
      "Relax on the pristine beaches of Maldives and enjoy the crystal-clear blue waters.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxYlRRNXO21IIllrBaqNLi9IG_cpqiLSgkaEPqR8wV00S6ujdEnFCL-4AzYwRP",
    price: 2500,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "New York City Escape",
    description:
      "Experience the bustling energy of New York City, visit Times Square, and take a stroll in Central Park.",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1587162146766-e06b1189b907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5ldyUyMHlvcmslMjBjaXR5fGVufDB8fDB8fHww ",
    location: "New York City",
    country: "United States",
  },
  {
    title: "Historical Rome",
    description:
      "Discover the ancient ruins of Rome, including the Colosseum and Roman Forum.",
    image:
      "https://images.unsplash.com/photo-1704915332184-68202025c9ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhpc3RvcmljYWwlMjByb21lfGVufDB8fDB8fHww ",
    price: 1500,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Serenity in Kyoto",
    description:
      "Immerse yourself in the tranquility of Kyoto's temples and traditional tea houses.",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEJrUfH1JqOzUYAjFqSkQMQ8cJO3CgpPBRBUMdi5N5GmogN66OFH5vkalfsd7q",
    price: 2000,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Adventure in Rio de Janeiro",
    description:
      "Embrace the vibrant culture of Rio de Janeiro, explore Copacabana beach, and hike up Sugarloaf Mountain.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTH1nSIOTSzSrsKaf5Ur3diQ4OrmD31SbVzR93tkqV6CrReoM6bJBpuBXILf_JC",
    price: 1600,
    location: "Rio de Janeiro",
    country: "Brazil",
  },
  {
    title: "Cultural Delight in Istanbul",
    description:
      "Experience the rich history and culture of Istanbul with its magnificent mosques and bazaars.",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQH_pbWUi8fdVt2G94qiBushyT9Q3cux7eNk2M2ZpbiK9r5Ve68rVMgHU2zaIEU",
    price: 1900,
    location: "Istanbul",
    country: "Turkey",
  },
  {
    title: "Scenic Swiss Alps",
    description:
      "Enjoy breathtaking views of the Swiss Alps and indulge in winter sports in Interlaken.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2ldUOyisbaQJu4r4_ByWrutTC_5dj2y1mC3ZNC5UWYCWHAReu6lGXgC8e6rU",
    price: 2200,
    location: "Interlaken",
    country: "Switzerland",
  },
  {
    title: "African Safari Adventure",
    description:
      "Embark on a thrilling safari adventure in the heart of Africa, witness majestic wildlife in their natural habitat.",
    price: 2800,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcTnBqk8nDDPCJGpxd8SjPiI0ImSlfexTcc-LWSCObL9OMcjalAqjfHS9w5xl9",
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Mystical Santorini",
    description:
      "Experience the enchanting beauty of Santorini's blue-domed churches and stunning sunsets.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-55NkTlqvgNw2bk0BLiJ2OUUQg_gUcgyR1Z_WX5QUcYiPlB0qf4hSfmzk2gT",
    price: 1700,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Aurora Borealis in Lapland",
    description:
      "Witness the magical Northern Lights in the Lapland region, Finland.",
    price: 2600,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqOyToT7uF85n6Bub12MyMfz1tevtSn4UqyzvyxV0K1ZnOE4Fq2vpDR1DHUgxW",
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Cultural Heritage of Cairo",
    description:
      "Explore the ancient wonders of Cairo, including the Pyramids of Giza and the Sphinx.",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRB5X2ermm8vSjuCj-gcEFLKSY6x88sLgYMhRndlZPoy35cBDOMS-hFkFNniJem",
    price: 2000,
    location: "Cairo",
    country: "Egypt",
  },
  {
    title: "Historic Edinburgh",
    description:
      "Immerse yourself in the rich history of Edinburgh, Scotland's capital, with its medieval architecture and Edinburgh Castle.",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQE-poYGd4BHrkkWsYP2K_WPeT3f4sdlzAEbmYSjI74lyXLgehzi6zuMucBUwIq",
    price: 1500,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Adventures in Queenstown",
    description:
      "Experience adrenaline-pumping adventures in Queenstown, New Zealand, known as the 'Adventure Capital.'",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLYQTpq4i32Z2NMYd_cy0z9G1eW9O41slLPSOOhASj0leHFtQke3RcVxSYN_b8",
    price: 2300,
    location: "Queenstown",
    country: "New Zealand",
  },
  {
    title: "Cruise in the Norwegian Fjords",
    description:
      "Embark on a scenic cruise through the breathtaking Norwegian Fjords.",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTU6w0p5sx2NmGssAP1HFmj8Fl-zSe_8mXGtSQYcOPS6dbVmOxR0WYrOzQrRauh",
    price: 2700,
    location: "Norwegian Fjords",
    country: "Norway",
  },
  {
    title: "Historical Athens",
    description:
      "Discover the ancient history of Athens, Greece, with its iconic Acropolis and Parthenon.",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAFWw-_as-j4SOfZWHMIcQUHisfo31mf38EDwq6zbgXoADpiJ0CxJLrScrdQbD",
    price: 1800,
    location: "Athens",
    country: "Greece",
  },
  {
    title: "Enchanting Bali",
    description:
      "Relax on the beautiful beaches and experience the unique culture of Bali, Indonesia.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQl_swqb1M1YJhWd1cAb94ez8Ss2Yox_thQei1_99dQQMrn3Ux-JP5YlJ0LKrFj",
    price: 1900,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Majestic Machu Picchu",
    description:
      "Hike the Inca Trail to witness the awe-inspiring ruins of Machu Picchu in Peru.",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8nTOARSbT09lsnqJk9QY6HhYBhsm-4vlCBoUiF6M9Pm8Sr4B6SjUjnH7yyKnB",
    price: 2500,
    location: "Machu Picchu",
    country: "Peru",
  },
  {
    title: "Cultural Charm of Prague",
    description:
      "Discover the charming streets and historic architecture of Prague, Czech Republic.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AKXpKJKMZ6ZKm96i1oQ9lRBSwzRebvPa-zJCaXZzks_RuVAFIqvw_mx39j2R",
    price: 1700,
    location: "Prague",
    country: "Czech Republic",
  },
  {
    title: "Island Paradise in Seychelles",
    description:
      "Escape to the pristine beaches and turquoise waters of Seychelles, a tropical paradise.",
    image: "",
    price: 3000,
    location: "Seychelles",
    country: "Seychelles",
  },
  {
    title: "Historical Petra",
    description:
      "Explore the ancient city of Petra in Jordan, known for its rose-red stone structures.",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtAwvsk7T2KilumrBoRqDQtIkD5zzpc-Oozdg689z1yfUZr0rn8Sm12DhIghh3",
    price: 2100,
    location: "Petra",
    country: "Jordan",
  },
  {
    title: "Majestic Yosemite National Park",
    description:
      "Discover the natural beauty of Yosemite National Park in California, USA, with its towering waterfalls and granite cliffs.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7FJvqNDLIIyE4QZGwj30XZh1z1OyctZEuDytGNZn-0btgKY9IoIfes68rkHo",
    price: 2000,
    location: "Yosemite National Park",
    country: "United States",
  },
  {
    title: "Cultural Tapestry of Marrakech",
    description:
      "Immerse yourself in the vibrant colors and culture of Marrakech, Morocco, with its bustling souks and historic palaces.",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQo45RGNqnsYtTl-B9hnS_PpaAdNYfJM9dvr6mOJczd57VAHZ88sWtqu4VItzA9",
    price: 1700,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Adventure in Queenstown",
    description:
      "Experience adrenaline-pumping adventures in Queenstown, New Zealand, known as the 'Adventure Capital.'",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIuoTup020XhcMLXiT8AS-2-3J1nqhFov5FKK7zS3127xRAEobaX4ghZmRv_e",
    price: 2300,
    location: "Queenstown",
    country: "New Zealand",
  },
  {
    title: "Cherry Blossom Season in Kyoto",
    description:
      "Witness the breathtaking beauty of cherry blossoms in full bloom in Kyoto, Japan.",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRp4J7uGRLgiKuBcxEg485qpj1ggky4RDPAgaY3YDb1lTASZ_LkKeEzU48y_lua",
    price: 2200,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Relaxing Retreat in the Maldives",
    description:
      "Indulge in a luxurious and relaxing retreat on the white sandy beaches of the Maldives.",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBkEvzJLHs1glR8KtRoHIxInszrcD_Sc1aTzP4__sjB2bxl6eRGHlQHr_-yZOc",
    price: 3200,
    location: "Maldives",
    country: "Maldives",
  },
];

module.exports = { data: travelSpots };
