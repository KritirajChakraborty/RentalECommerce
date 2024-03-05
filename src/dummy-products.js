import ac3star from '/AC3.jpg';
import ac5star from '/AC5.jpg';
import bedSingle from '/bedSingle.jpg';
import bedDouble from '/bedDouble.jpg';
import fridgeSingle from '/fridgeSingle.jpg';
import fridgeDouble from '/fridgeDouble.jpg';
import induction from '/induction.jpg';
import sofa from '/sofa.jpg';
import sofaBed from '/sofaCumBed.jpg';
import wardrobe from '/wardrobe.jpg';
import washingMachine from '/wm.jpg';
import ac4 from '/AC4.jpg';
import ac6 from '/AC6.jpg';
import ac7 from '/AC7.jpg';
import bed1 from '/bed1.jpg';
import bed2 from '/bed2.jpg';
import bed3 from '/bed3.jpg';
import wardrobe1 from '/wardrobe1.jpg';
import wardrobe2 from '/wardrobe2.jpg';
import wardrobe3 from '/wardrobe3.jpg';
import wardrobe4 from '/wardrobe4.jpg';
import fridge1 from '/fridge1.jpg';
import fridge2 from '/fridge2.jpg';
import fridge3 from '/fridge3.jpg';
import wm1 from '/wm1.jpg';
import wm2 from '/wm2.jpg';
import wm4 from '/wm4.jpg';
import wm5 from '/wm5.jpg';
import id from '/inductionD.jpg';
import shoeRack1 from '/shoeRack1.jpg';
import shoeRack2 from '/shoeRack2.jpg';
import shoeRack3 from '/shoeRack3.jpg';
import sofa1 from '/sofa1.jpg';
import sofa2 from '/sofa2.jpg';
import sofa3 from '/sofa3.jpg';


export const DUMMY_PRODUCTS = [
  {
  id: 'b1',
  image: bedSingle,
  type: 'Bed',
  title: 'Single Bed',
  status: 'Best Seller',
  price: 11,
  dp: 11 - (11 * 0.1),
  description:
  'Crafted for solo sleepers, this single bed offers a cozy haven for a restful nights sleep. Its compact size makes it perfect for smaller bedrooms or guest rooms, while still providing ample comfort and support'
  },
  {
    id: 'b2',
    image: bedDouble,
    type: 'Bed',
    title: 'Double Bed',
    status: 'New Arrival',
    price: 22,
    dp: 22 - (22 * 0.1),
    description:
    ' Spaciously designed to accommodate couples or individuals who enjoy extra room to stretch out. With its sturdy frame and comfortable mattress, this double bed ensures a peaceful and rejuvenating sleep experience night after night.'
    },
    {
      id: 's1',
      image: sofa,
      title: 'Sofa',
      type: 'Furniture',
      status: 'New Arrival',
      price: 150,
      dp: 150 - (150 * 0.1),
      description:
      'Sink into relaxation with this inviting sofa. Featuring plush cushions and a sturdy frame, it offers comfortable seating for lounging or entertaining guests. Its timeless design and versatile style complement any living space with effortless elegance.'
      },
      {
        id: 's2',
        image: sofaBed,
        type: 'Furniture',
        title: 'Sofa cum Bed',
        status: 'Best Seller',
        price: 175,
        dp: 175 - (175 * 0.1),
        description:
        'Maximize space and functionality with this versatile sofa cum bed. Transforming effortlessly from a comfortable seating option to a cozy bed, its perfect for accommodating overnight guests or creating a cozy lounging area in smaller living spaces.'
        },
        {
          id: 'w1',
          image: wardrobe,
          title: 'Wardrobe',
          type: 'Utility',
          status: 'Best Seller',
          price: 125,
          dp: 125 - (125 * 0.1),
          description:
          'Keep your clothing and accessories neatly organized with this stylish wardrobe. Featuring multiple shelves, drawers, and hanging space, it offers ample storage for all your wardrobe essentials while adding a touch of elegance to your bedroom decor.'
          },
          
  {
    id: 'a1',
    image: ac3star,
    title: 'Air Conditioner 3 star',
    type: 'AC',
    status: 'New Arrival',
    price: 220,
    dp: 220 - (220 * 0.1),
    description:
      'Stay cool and comfortable during hot summer days with this energy-efficient 3-star AC. Designed to deliver reliable cooling performance while minimizing energy consumption, it offers a perfect balance of comfort and savings.',
  },
  {
    id: 'a2',
    image: ac5star,
    title: 'Air Conditioner 5 star',
    type: 'AC',
    status: 'Best Seller',
    price: 300,
    dp: 300 - (300 * 0.1),
    description:
      'Enjoy superior cooling efficiency and energy savings with this 5-star AC. Utilizing advanced technology and smart features, it provides powerful cooling performance while consuming minimal electricity, making it an eco-friendly choice for your home.',
  },

  {
    id: 'wm1',
    image: washingMachine,
    title: 'Washing Machine',
    type: 'Electronics',
    status: 'New Arrival',
    price: 150,
    dp: 150 - (150 * 0.1),
    description:
      'Simplify your laundry routine with this high-performance washing machine. Offering various wash cycles and settings, it ensures thorough cleaning for different types of fabrics while saving time and water. Its durable construction and user-friendly controls make laundry day a breeze.',
  },
  {
    id: 'f1',
    image: fridgeSingle,
    title: 'Single Door Refrigerator',
    type: 'Electronics',
    status: 'Best Seller',
    price: 250,
    dp: 250 - (250 * 0.1),
    description:
    'This single door refrigerator combines efficient cooling performance with convenient storage options. Ideal for smaller kitchens or living spaces, it offers ample room for storing essentials while keeping them fresh and organized.',
    },
    {
    id: 'f2',
    image: fridgeDouble,
    title: 'Double Door Refrigerator',
    type: 'Electronics',
    status: 'New Arrival',
    price: 270,
    dp: 270 - (270 * 0.1),
    description:
    'Featuring a spacious interior and innovative design, this double door refrigerator provides separate compartments for fresh and frozen foods. With adjustable shelves and versatile storage options, it ensures easy access to your groceries while preserving their quality for longer periods.',
    },
    { 
    id: 'i1',
    image: induction,
    title: 'Induction',
    type: 'Electronics',
    status: 'Best Seller',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Experience fast and efficient cooking with this advanced induction. Using electromagnetic technology, it heats cookware directly for precise temperature control and even cooking results. Its sleek design and user-friendly interface make meal preparation a breeze.'
    },
    {id: 'ac3',
    image: ac4,
    title: 'Air Conditioner - Model 1',
    type: 'AC',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Keep cool and cozy on scorching summer days with this eco-friendly AC. Engineered for reliable cooling and minimal energy usage, it ensures both comfort and cost savings.'
    },
    {id: 'ac4',
    image: ac6,
    title: 'Air Conditioner - Model 2',
    type: 'AC',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Remain relaxed and comfortable throughout sweltering summer months with this energy-saving AC. Crafted to provide consistent cooling performance while conserving energy, it strikes an ideal blend of comfort and economic efficiency.'
    },
    {id: 'ac5',
    image: ac7,
    title: 'Air Conditioner - Model 3',
    type: 'AC',
    status: 'Best Seller',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Stay relaxed and at ease during hot summer days with this energy-efficient AC. Engineered for optimal cooling performance while reducing energy consumption, it offers a perfect balance of comfort and cost-effectiveness.'
    },
    {id: 'b3',
    image: bed3,
    title: 'Bed-Model 3 ',
    type: 'Bed',
    status: 'Best Seller',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Designed with generous space to cater to couples or individuals craving additional room to relax. Equipped with a durable structure and cozy mattress, this double bed promises serene and refreshing sleep, ensuring rejuvenation night after night.'
    },
    {id: 'b4',
    image: bed1,
    title: 'Bed-Model 1',
    type: 'Bed',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Crafted with ample space to accommodate couples or individuals seeking extra room to unwind. Featuring a robust frame and plush mattress, this double bed guarantees tranquil and revitalizing slumber, night after night.'
    },
    {id: 'b5',
    image: bed2,
    title: 'Bed-Model 2',
    type: 'Bed',
    status: 'Best Seller',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Designed with generous space to cater to couples or individuals craving additional room to relax. Equipped with a durable structure and cozy mattress, this double bed promises serene and refreshing sleep, ensuring rejuvenation night after night.'
    },
    {id: 'w2',
    image: wardrobe1,
    title: 'Wardrobe-Model 2',
    type: 'Furniture',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Effortlessly maintain orderliness in your clothing and accessories with this chic wardrobe. Boasting numerous shelves, drawers, and hanging compartments, it provides abundant storage for all your wardrobe necessities, elevating the sophistication of your bedroom decor.'
    },
    {id: 'w3',
    image: wardrobe2,
    title: 'Wardrobe-Model 3',
    type: 'Furniture',
    status: 'Best Seller',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Effortlessly elevate your bedroom elegance while ensuring impeccable organization for your clothing and accessories with this fashionable wardrobe. Boasting multiple shelves, drawers, and hanging areas, it offers ample storage space for all your wardrobe essentials, keeping them neatly arranged and easily accessible.'
    },
    {id: 'w4',
    image: wardrobe3,
    title: 'Wardrobe-Model 4',
    type: 'Furniture',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Enhance your bedroom style quotient while keeping your clothing and accessories impeccably organized with this trendy wardrobe. Featuring a plethora of shelves, drawers, and hanging areas, it provides generous storage for all your wardrobe staples, adding a dash of sophistication to your bedroom decor.'
    },
    {id: 'w5',
    image: wardrobe4,
    title: 'Wardrobe-Model 5',
    type: 'Furniture',
    status: 'Best Seller',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Upgrade your bedroom aesthetic appeal with this chic wardrobe, perfect for keeping your attire and accessories in order. Boasting multiple shelves, drawers, and hanging space, it offers ample storage while enhancing the elegance of your bedroom decor.'
    },
    {id: 'f3',
    image: fridge1,
    title: 'Fridge-Model 3',
    type: 'Electronics',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Experience efficient cooling and convenient storage solutions with this refrigerator. Perfect for compact kitchens or living areas, it provides ample space for essentials, ensuring freshness and organization without compromising performance.'
    },
    {id: 'f5',
    image: fridge3,
    title: 'Fridge-Model 5',
    type: 'Electronics',
    status: 'Best Seller',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Discover optimal cooling performance and convenient storage solutions with this refrigerator. Designed for compact kitchens or living spaces, it provides ample room for essentials, ensuring freshness and organization without compromising on efficiency.'
    },
    {id: 'wm2',
    image: wm1,
    title: 'Washing Machine-Model 2',
    type: 'Washing Machine',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Streamline your laundry routine with our advanced washing machine. Engineered for efficiency and convenience, it effortlessly tackles dirt and stains while preserving fabric quality. With multiple wash cycles and intuitive controls, achieving clean, fresh-smelling laundry has never been easier. Upgrade your home with our reliable washing machine and enjoy hassle-free laundry days.'
    },
    {id: 'wm3',
    image: wm2,
    title: 'Washing Machine-Model 3',
    type: 'Washing Machine',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Simplify your laundry tasks with our state-of-the-art washing machine. Designed for optimal performance and user convenience, it handles tough stains while preserving garment integrity. With versatile wash cycles and user-friendly features, achieving immaculate laundry results is effortless.'
    },
    {id: 'wm4',
    image: wm4,
    title: 'Washing Machine-Model 4',
    type: 'Washing Machine',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Revolutionize your laundry experience with our innovative washing machine. Crafted for efficiency and ease of use, it effortlessly removes dirt and grime while maintaining fabric softness. Featuring customizable wash settings and intuitive controls, it ensures pristine laundry outcomes with every cycle.'
    },
    {id: 'wm5',
    image: wm5,
    title: 'Washing Machine-Model 5',
    type: 'Washing Machine',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Elevate your laundry game with our cutting-edge washing machine. Engineered for superior performance and user-friendly operation, it tackles tough stains with ease while safeguarding fabric quality. With a range of customizable wash options and smart features, achieving spotless laundry has never been more convenient.'
    },
    {id: 'i2',
    image: id,
    title: 'Induction-Model 2',
    type: 'Electronics',
    status: 'Best Seller',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Upgrade your kitchen with our versatile induction cooktop. Engineered for precision cooking and energy efficiency, it delivers fast and consistent results. With intuitive controls and multiple cooking modes, it offers endless culinary possibilities. Experience the future of cooking with our innovative induction cooktop and enjoy delicious meals with ease.'
    },
    {id: 'sh1',
    image: shoeRack1,
    title: 'Shoe Rack-Model 1',
    type: 'Utility',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Organize your footwear in style with our sleek shoe rack. Designed for both functionality and aesthetics, it keeps your shoes neatly arranged and easily accessible. With its durable construction and space-saving design, its the perfect addition to any entryway or closet, helping you maintain a clutter-free environment.'
    },
    {id: 'sh2',
    image: shoeRack2,
    title: 'Shoe Rack-Model 2',
    type: 'Utility',
    status: 'Best Seller',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Declutter your entryway with our modern shoe rack. Combining functionality and elegance, it effortlessly organizes your shoes while adding a touch of sophistication to your space. With its sturdy build and compact design, it maximizes storage without sacrificing style.' 
     },
    {id: 'sh3',
    image: shoeRack3,
    title: 'Shoe Rack-Model 3',
    type: 'Utility',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Revamp your closet space with our versatile shoe rack. Engineered for practicality and visual appeal, it neatly stores your footwear collection while enhancing the aesthetics of your room. Featuring a durable structure and customizable layout options, it offers both convenience and style for your home.'
    },
    {id: 's3',
    image: sofa1,
    title: 'Sofa-Model 3',
    type: 'Furniture',
    status: 'New Arrival',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Transform your home with our cozy sofa. Crafted with comfort in mind, it invites you to unwind after a long day. Featuring soft upholstery and sturdy construction, it offers a cozy retreat for lounging and entertaining.'
    },
    {id: 's4',
    image: sofa2,
    title: 'Sofa-Model 4',
    type: 'Furniture',
    status: 'Best Seller',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    "Elevate your decor with our stylish sofa. Boasting timeless design and premium craftsmanship, it becomes the focal point of any room. With its spacious seating and supportive cushions, it provides the ultimate lounging experience for you and your guests."
    },
    {id: 's5',
    image: sofa3,
    title: 'Sofa-Model 5',
    type: 'Furniture',
    status: 'Best Seller',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    "Enhance your living space with our versatile sofa. Designed for both comfort and functionality, it adapts to your lifestyle with ease. Whether you're hosting gatherings or enjoying quiet evenings, its spacious seating and durable construction ensure years of comfort and enjoyment."
    },

];
