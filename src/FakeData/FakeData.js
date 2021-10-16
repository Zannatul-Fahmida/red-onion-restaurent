const menus = [
    {
      id: 1,
      name: 'Bagel and cream cheese',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 6.99,
      img: 'https://i.ibb.co/0FYk03j/breakfast4.png',
      category: 'breakfast'
    },
    {
      id: 2,
      name: 'Breakfast sandwich',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 9.99,
      img: 'https://i.ibb.co/nR46Jvf/breakfast2.png',
      category: 'breakfast' 
    },
    {
      id: 3,
      name: 'Baked chicken',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 10.99,
      img: 'https://i.ibb.co/9sFX2hj/breakfast3.png',
      category: 'breakfast'  
    },
    {
      id: 4,
      name: 'Eggs Benedict',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 8.99,
      img: 'https://i.ibb.co/nj6DYhm/breakfast1.png',
      category: 'breakfast'  
    },
    {
      id: 5,
      name: 'Toast croissant fried egg',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 19.99,
      img: 'https://i.ibb.co/BsWK3yP/breakfast6.png',
      category: 'breakfast'  
    },
    {
      id: 6,
      name: 'Full breakfast fried egg toast brunch',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 3.99,
      img: 'https://i.ibb.co/P6b5w6f/breakfast5.png',
      category: 'breakfast'  
    },
    {
      id: 7,
      name: 'Healthy meal plan',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 23.99,
      img: 'https://i.ibb.co/f1XmY3V/lunch6.png',
      category: 'lunch'  
    },
    {
      id: 8,
      name: 'Fried chicken bento',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 9.99,
      img: 'https://i.ibb.co/kJycX7w/lunch5.png',
      category: 'lunch'  
    },
    {
      id: 9,
      name: 'Tarragon rubbed salmon',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 6.99,
      img: 'https://i.ibb.co/3WyFncc/lunch3.png',
      category: 'lunch'  
    },
    {
      id: 10,
      name: 'Indian lunch',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 8.99,
      img: 'https://i.ibb.co/ZVXPs0C/lunch4.png',
      category: 'lunch'  
    },
    {
      id: 11,
      name: 'Beaf steak',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 15.99,
      img: 'https://i.ibb.co/V3sSjNM/lunch1.png',
      category: 'lunch'  
    },
    {
      id: 12,
      name: 'Honey soy glazed salmon with peppers',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 7.99,
      img: 'https://i.ibb.co/tLdtm1n/lunch2.png',
      category: 'lunch'  
    },
    {
      id: 13,
      name: 'Salmon with grapefruit and lentil salad',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 9.99,
      img: 'https://i.ibb.co/wL8JFD4/dinner6.png',
      category: 'dinner'  
    },
    {
      id: 14,
      name: 'Lemony salmon piccata',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 10.99,
      img: 'https://i.ibb.co/W5Q4B2f/dinner2.png',
      category: 'dinner'  
    },
    {
      id: 15,
      name: 'Pork tenderloin with quinoa pilaf',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 12.99,
      img: 'https://i.ibb.co/D8T2Hys/dinner5.png',
      category: 'dinner'  
    },
    {
      id: 16,
      name: 'French fries with cheese',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 8.99,
      img: 'https://i.ibb.co/Jv1twMC/dinner4.png',
      category: 'dinner'  
    },
    {
      id: 17,
      name: 'Garlic butter baked salmon',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 6.99,
      img: 'https://i.ibb.co/nqXrJx5/dinner3.png',
      category: 'dinner'  
    },
    {
      id: 18,
      name: 'Baked chicken',
      shortDescription: 'How we dream about our future',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur itaque officiis. Quasi provident iure voluptatem cupiditate dolorum laudantium minus praesentium, sint error adipisci cum in et hic necessitatibus laboriosam.',
      price: 9.99,
      img: 'https://i.ibb.co/cCfQqxz/dinner1.png',
      category: 'dinner'  
    }
]