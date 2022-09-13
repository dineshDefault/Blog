export const blogsForDemo = [
  {
    title: "My new website",
    content:
      "When building webpages, developers often need to include resources from other webpages. Some common examples that you may recognize from browsing the web include the share button from Twitter, the like button from Facebook, and the map display from Google Maps. Creation and editing is extremely simple: just click, drag or drop. The design will be rearranged automatically with a grid layout. Everything fits into the best place, and is simple to move, resize or rearrange.",
    author: "Satyam",
    id: 1,
  },
  {
    title: "Welcome party!",
    content:
      "Giving your guests a warm welcome to your destination wedding is a great token of appreciation for their time and planning invested to make it to your big day. For this reason, Welcome Parties are a good idea as they open the opportunity for everyone to get to know each other and create a more intimate atmosphere prior to the wedding day. Remember it can be as simple as you desire, but no less fantastic.",
    author: "Rohit",
    id: 2,
  },
  {
    title: "Web dev top tips",
    content:
      "Web developers around the world share the desire to write, debug, and ship code day in and day out. It’s not an easy job since most of the time you’re constantly learning on the fly. But with great study and work habits, becoming an experienced web developer is attainable (especially if you’re considering a Thinkful Engineering Immersion or Engineering Flex course).",
    author: "Udit",
    id: 3,
  },
];

export const wordsForDemo = ["and", "to", "the"];

export const updateLocalStroage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
