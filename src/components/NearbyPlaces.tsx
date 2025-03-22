import React, { useState } from "react";
import PlaceCard from "./PlaceCard";

import BandipurNationalParl from "../images/places/BandipurNationalPark.webp";
import CatherineFalls from "../images/places/CatherineFalls.webp";
import blackthunderthemepark from "../images/places/blackThunderThemePark.webp";
import dolphinenose from "../images/places/dolphineNose.webp";
import kodananad from "../images/places/KodanadViewPoint.webp";
import lawsfall from "../images/places/Law'sFall.webp";
import pykarafalls from "../images/places/PykarafallsOoty.webp";
import rangaswamypark from "../images/places/rangasamyPark.webp";
import simsparlk from "../images/places/simsPark.webp";
import sullivansmemorial from "../images/places/sullivansMemorial.webp";
import sundattywaterfalls from "../images/places/SundattyWaterfallsKotagiri.webp";
import thunderworld from "../images/places/thunderWorld.webp";

interface Place {
  id: number;
  name: string;
  image: string;
  description: string;
}

const places: Place[] = [
  {
    id: 1,
    name: "Catherine Falls",
    image: CatherineFalls,
    description:
      "Catherine Falls is a double-cascaded waterfall located in Kotagiri, The Nilgiris District, in the Indian state of Tamil Nadu. It is a major tourist spot, located on the Mettupalayam road branching off at Aravenu. The upper fall drops to the floor, and is the second-highest in the Nilgiri Mountains. The waters from the upper stream of the Kallar River are crossed by the Mettupalayam-Ooty road beyond the mountains in the southwest. The combined height of both falls is about 76 metres (250 ft)",
  },
  {
    id: 2,
    name: "Bandipur National Park",
    image: BandipurNationalParl,
    description:
      "This National Park was formed by including most of the forest areas of the then Venugopala Wildlife Park established under Govt. Notification dated 19th February 1941 and the area was enlarged in 1985 extending over an area of 874.20 Sq.Km and named as Bandipur National Park.",
  },
  {
    id: 3,
    name: "Black Thunder Theme Park",
    image: blackthunderthemepark,
    description:
      "Black Thunder is a water theme park in Tamil Nadu, India. It is situated at the foot of Nilgiris near Mettupalayam, in Coimbatore 40 km north of the city and occupies an area of about 75 acres (300,000 m2). The park offers about 49 rides, Surf Hill and the Wild River Ride notable among them. The park has a hotel on its premises.",
  },
  {
    id: 4,
    name: "Dolphine Nose",
    image: dolphinenose,
    description:
      "If you wish to witness the picturesque view of the mountains and the lush green tea estates on your way to Ooty tour, Dolphin’s Nose is your destination. It is a romantic gem in the Queen of hill stations. This famous attraction does justice to its name and offers its visitors a breathtaking view of the graceful Catherine Falls. Located at a distance of just 12 km from Coonoor, the Dolphin’s Nose is a wonderful spot where one can enjoy the natural beauty at its best. The 1,550 m high altitude above sea level makes it a perfect getaway for all those who wish to overlook the 180-degree view of the surrounding scenery. If you look at the other side, you will get to see an unobstructed view of the Kotagiri streams, which is a dreamy experience for sightseeing lovers. It is undoubtedly a must-visit sightseeing place in Ooty. The excitement grows multi-fold if you enjoy a scenic drive through its winding narrow roads that allow you to discover the blue landscapes of Tamil Nadu as you ascend. The lush greenery makes couples and honeymooners forget everything about the daily chaos, and the excellent atmosphere and calmness of the quaint villages let families have a fun-filled time. All-in-all, it won’t be wrong to say that the place leaves you awe-struck with its magic every time you get to see this huge rock.",
  },
  {
    id: 5,
    name: "Kodanad View Point",
    image: kodananad,
    description:
      "A good drive from ooty goes through the green carpet of Tea estates and the valley on the other side with settlements. The supposed to be Jayalalitha property of estates is beautifully laid out. The roads in that estate is spotlessly clean as also the beautiful emerald like tea estates. The whole area is cordoned off in high-rise compound walls and gates. The view point has an upper deck and a lower deck. One can have a lovely look of the hills and mountains, if you are lucky to have a clear day and the view was beautiful. Kotagiri itself is a lovely and unspoilt landscape and hence there are lot of places from where one can have a great view of the valley and greenery. There are no hotels or restaurants there at the view point. Have a few tea shops nearby. Both the upper deck and the lower deck has only stairs and wheel chairs cannot be manouvered. Kodanad View Point is around 18 Kms from Kotagiri. It is one of the smaller towns in the Nilgiri hills and is relatively unknown to outsiders. This beautiful place enjoys a climatic advantage over Ooty because it is protected by the Doddabetta mountain range from the onslaught of the south-west monsoon. Kodanad is one of the most scenic spots in the Nilgiris with scintillating 220 degree views, tall and dense pine forests, beautifully green tea estates and a pleasant nip in the air. Another special thing about Kodanad is that it is the home of AIADMK chief and chief minister of Tamil Nadu, Ms. Jayalalithaa. Most of the tea estates area falls under her property. Kodanad is Jayalalithaa’s summer home and relaxing centre",
  },
  {
    id: 6,
    name: "Laws Fall",
    image: lawsfall,
    description:
      "At a distance of 10 km from Coonoor & 26 km from Ooty, Law's Falls is a beautiful waterfall situated in Coonoor. Located on Coonoor - Mettupalayam Road, it is one of the popular waterfalls in the Nilgiris, and among the must-visit Coonoor tourist places. The beautiful Law's Falls is set inside the Coonoor forest range with vast stretches of undisturbed nature around. Named after Col. Law, who constructed the new Coonoor ghat, this waterfall is formed by the Coonoor river. The height of the waterfall is about 30 feet through multiple cascades. This small & pretty waterfall attracts a huge crowd, especially during post-monsoons as part of Coonoor packages. Since this place is close to the main road, it does not need much walk/trek. One can enjoy the force of the water at bottom of the falls. The place is rocky and slippery. Timings: 6 AM - 6 PM Entry: Free",
  },
  {
    id: 7,
    name: "Pykara Falls",
    image: pykarafalls,
    description:
      "Originating in the Mukurthi peak, Pykara River and the waterfalls the river produces is one of the most beautiful and majestic sights that you will get to see in Ooty. Located 20 kms away from Ooty in the Ooty-Mysore road, the Pykara lake has been developed into a thoroughly enjoyable picnic spot by the addition of a boat house and restaurant. The dam and power house built across the river also ensures hydro electricity to the population. Declared a heritage site, the Pykara lake is one of those must see sights in Ooty. As the river flows down the mountains it forms two majestic waterfalls, the first one fifty five meters in height and the second one even higher at sixty one meters. To bask in the summer sun by the side of the lake or go boating in the lake are the favorite pastimes of people who visit there.",
  },
  {
    id: 8,
    name: "Rangaswamy Park",
    image: rangaswamypark,
    description:
      "Rangaswamy Peak is of great importance to the local Irula people their sacred Rangasamy Temple is right up there on the summit. You can pay a visit to the shrine and also look around at some spectacular views from a height of 6,000 m if youre up for a steep trek. Take the steps up at your own pace to reach the top. The 360-degree panoramic view from the summit is stunning. You can see the Bhavani river flowing into the Bhavani Sagar dam. There are no tourist facilities there except for a shelter if it rains. Take plenty of water and snacks if venturing up. The Rangasamy Tablet is a distinctive feature that is northwest of the Peak and often hides from view in the ever-present mist. To the less adventurous, both the Peak and Pillar are readily visible from the Kodanad View Point itself at a distance. Certainly a more comfortable option for older people.",
  },
  {
    id: 9,
    name: "Sim's Park",
    image: simsparlk,
    description:
      "Be sure to take some time off for Sim’s Park in Coonoor when you’re exploring the popular tourist attractions in Ooty. Home to 1000 plus species of colourful and vibrant flowers, the Sim’s Park is a well-maintained botanical garden where you can enjoy nature at its best along with exploring the breathtaking landscapes. An excellent and delightful visit for fun seekers, sightseeing lovers and photographers, the Sim’s Park lets you spend some quality time amid lush greenery. Situated on the northern side of Coonoor, the park offers a perfect getaway for all those who are looking to escape from the metro life. It is a great base to discover the hidden secrets of rare exotic plants and is a go-to place for pleasant afternoons on your Ooty tour. Spread over an area of 12 hectares of land, the park is mainly divided into 4 sections as a small Lily pond, a rose garden, a boating area and a flowering plants area. It boasts of an array of trees introduced from different parts of the world and has walkways lined up with beautiful flowers. Other highlights of the park include Handsome Ornamental tree, Queensland Karry Pine and Rudraksha Tree. Another point of interest is its fruits and vegetable show, which has been successfully organized by the Department of Horticulture from the past 53 years in continuation. It is a 2-day affair that showcases various exotic species of plants, thus attracting nearly 25,000 visitors every year from different corners of the world. There is also a glass house and a rose garden that gives you hundreds of reasons to smile the moment you think of visiting this place.",
  },
  {
    id: 10,
    name: "John Sullivan Memorial",
    image: sullivansmemorial,
    description:
      "John Sullivan Memorial is located at Kannerimukku, 2 kilometres from the centre of the Kotagiri town. John Sullivan was an English civil servant, the first to settle in Ooty, and the reason why the Nilgiri s are the way they are today. During his lifetime, he was known to have championed the cause of the natives, and had their respect. He was one of the reasons that tea cultivation started being practiced on a massive scale in the Nilgiris district. He was born in the year 1788 AD, and died in the year 1855 AD. The John Sullivan Memorial was constructed on what was once his residence. Known as the Pethakal Bungalow, it now houses the Nilgiris Documentation Centre as well as the Nilgiris Museum. The memorial is open.",
  },
  {
    id: 11,
    name: "Sundatty Waterfalls",
    image: sundattywaterfalls,
    description:
      "Sundatty Waterfalls is situated in Kodanad near Kotagiri Town near Ooty Hill Station in Kotagiri Taluk in Nilgiris District of Tamilnadu. Sundatty Waterfalls is also called as Goam Falls. There is no proper way to approach this falls as it was situated inside reserved forest. Sundatty Waterfalls is located at about 12 Kms from Kotagiri Bus Stand, 13 Kms from Kotagiri, 32 Kms from. Coonoor, 33 Kms from Coonoor Railway Station, 46 Kms from Mettupalayam Railway Station, 43 Kms from Ooty, 79 Kms from Coimbatore and 83 Kms from Combatore Airport. Buses are available from Kotagiri Bus Stand to this place frequently. Private Taxis are available from Ooty, Kotagiri and Coonoor to reach this place.",
  },
  {
    id: 12,
    name: "Thunder World",
    image: thunderworld,
    description:
      "Among the many amusement and theme parks in Ooty, Thunder World is undoubtedly one of the best entertainment parks that invite people to spend a great time with their loved ones. Also referred to as the Dinosaur Park, this unspoiled site introduces you to the next level of leisure and recreational activities that leave you happy and excited at the same time. It is a perfect destination for all those who wish to add some fun element to their life and has also become a go-to place for a half or full-day excursion. The prime highlight of the Thunder World is Jurassic Park. You can also visit the World of Spirits with the Vortex section that showcases 3D paintings with some illusions to completely blow off your mind. Other points of interest are a camera museum and a 5D theatre that deliver an altogether different experience. Make sure to bring a camera with you to capture some memories you’ll create here.",
  },
];

const NearbyPlaces = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  return (
    <section className="py-16 bg-gray-50" id="nearby">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">
          Nearby Attractions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {places.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              onClick={() => setSelectedPlace(place)}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedPlace && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
              <div className="relative">
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  className="w-full h-72 object-cover rounded-t-lg"
                />
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 shadow-md transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex-grow">
                <h3 className="text-2xl font-serif mb-4 text-gray-800">
                  {selectedPlace.name}
                </h3>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="whitespace-pre-line">
                    {selectedPlace.description}
                  </p>
                </div>
              </div>

              <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-lg">
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NearbyPlaces;
