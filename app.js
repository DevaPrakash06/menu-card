/**
 * KARUMBUR BIRYANI — DINE-IN QR MENU INTERACTIVE ENGINE
 * Authentic Restaurant Menu Catalog (73 Dishes & Combos)
 * Strictly Dine-In (No Cart, No Checkout, No Online Ordering)
 */

(function () {
  'use strict';

  // --- RESTAURANT DISH CATALOG (73 ITEMS) ---
  const MENU_DATA = [
    {
      id: 'cat-starters',
      categoryName: 'Starters (Veg & Non-Veg)',
      categorySubtitle: 'Crispy appetizers, wok-tossed indo-chinese delights & sizzling hot roasts',
      items: [
        // GOBI (VEG)
        {
          id: 'dish-gobi-65',
          name: 'Gobi 65',
          tamil: 'கோபி 65',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: true,
          isSignature: true,
          price: 160,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/gobi-65.jpg',
          desc: 'Crispy golden spiced cauliflower florets tossed with curry leaves, green chilies and lemon.',
          ingredients: ['Fresh Cauliflower', 'Curry Leaves', 'Green Chilies', 'Kashmiri Chili', 'Lemon'],
          allergens: ['Vegetarian', 'Vegan Friendly']
        },
        {
          id: 'dish-chilli-gobi',
          name: 'Chilli Gobi',
          tamil: 'சில்லி கோபி',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: true,
          isSignature: false,
          price: 160,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/chilli-gobi.jpg',
          desc: 'Wok-tossed battered cauliflower with bell peppers, spring onions and tangy spicy chili sauce.',
          ingredients: ['Cauliflower', 'Bell Peppers', 'Garlic', 'Chili Sauce', 'Spring Onions'],
          allergens: ['Vegetarian']
        },
        {
          id: 'dish-gobi-manchurian',
          name: 'Gobi Manchurian',
          tamil: 'கோபி மஞ்சூரியன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: true,
          isSignature: false,
          price: 160,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/gobi-manchurian.jpg',
          desc: 'Crispy florets glazed in savory Indo-Chinese Manchurian sauce with garlic, ginger, and soy.',
          ingredients: ['Cauliflower', 'Ginger-Garlic', 'Dark Soy', 'Spring Onions'],
          allergens: ['Vegetarian', 'Contains Soy']
        },

        // PANEER (VEG)
        {
          id: 'dish-paneer-65',
          name: 'Paneer 65',
          tamil: 'பன்னீர் 65',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: true,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/paneer-65.jpg',
          desc: 'Soft artisanal cottage cheese cubes crisped in spiced batter and tossed with curry leaves.',
          ingredients: ['Fresh Paneer', 'Red Chili Paste', 'Curry Leaves', 'Cumin'],
          allergens: ['Vegetarian', 'Contains Dairy']
        },
        {
          id: 'dish-chilli-paneer',
          name: 'Chilli Paneer',
          tamil: 'சில்லி பன்னீர்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: true,
          isSignature: true,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/chilli-paneer.jpg',
          desc: 'Golden paneer cubes stir-fried with green capsicum, onions, garlic and dark chili glaze.',
          ingredients: ['Paneer', 'Green Capsicum', 'Onions', 'Garlic', 'Chili Sauce'],
          allergens: ['Vegetarian', 'Contains Dairy']
        },
        {
          id: 'dish-honey-paneer',
          name: 'Honey Paneer',
          tamil: 'ஹனி பன்னீர்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: true,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 1,
          image: 'images/honey-paneer.jpg',
          desc: 'Crisp paneer glazed in sweet honey chili reduction with toasted sesame seeds.',
          ingredients: ['Paneer', 'Natural Honey', 'Chili Flakes', 'Sesame Seeds'],
          allergens: ['Vegetarian', 'Contains Dairy']
        },
        {
          id: 'dish-singapore-paneer',
          name: 'Singapore Paneer',
          tamil: 'சிங்கப்பூர் பன்னீர்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: true,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/singapore-paneer.jpg',
          desc: 'Spicy wok-tossed paneer cubes in Singaporean spiced chili garlic sauce with bell peppers.',
          ingredients: ['Paneer', 'Curry Paste', 'Garlic', 'Peppers', 'Spring Onions'],
          allergens: ['Vegetarian', 'Contains Dairy']
        },
        {
          id: 'dish-paneer-manchurian',
          name: 'Paneer Manchurian',
          tamil: 'பன்னீர் மஞ்சூரியன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: true,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/paneer-manchurian.jpg',
          desc: 'Pan-fried cottage cheese tossed in rich aromatic Indo-Chinese Manchurian gravy.',
          ingredients: ['Paneer', 'Dark Soy Sauce', 'Minced Garlic', 'Ginger', 'Coriander'],
          allergens: ['Vegetarian', 'Contains Dairy', 'Contains Soy']
        },

        // MUSHROOM (VEG)
        {
          id: 'dish-mushroom-65',
          name: 'Mushroom 65',
          tamil: 'காளான் 65',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: true,
          isSignature: false,
          price: 170,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/mushroom-65.jpg',
          desc: 'Fresh button mushrooms fried to crisp perfection with aromatic South Indian spices.',
          ingredients: ['Button Mushrooms', 'Rice Flour Batter', 'Curry Leaves', 'Lemon'],
          allergens: ['Vegetarian']
        },
        {
          id: 'dish-chilli-mushroom',
          name: 'Chilli Mushroom',
          tamil: 'சில்லி காளான்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: true,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/chilli-mushroom.jpg',
          desc: 'Tender mushrooms wok-fried with crisp onions, capsicum, garlic and hot chili sauce.',
          ingredients: ['Fresh Mushrooms', 'Green Chili', 'Capsicum', 'Soy Sauce'],
          allergens: ['Vegetarian']
        },
        {
          id: 'dish-pepper-mushroom',
          name: 'Salt and Pepper Mushroom',
          tamil: 'பெப்பர் காளான்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: true,
          isSignature: true,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 3,
          image: 'images/pepper-mushroom.jpg',
          desc: 'Dry pan-roasted mushrooms tossed with crushed Tellicherry black peppercorns and shallots.',
          ingredients: ['Mushrooms', 'Coarse Black Pepper', 'Curry Leaves', 'Shallots'],
          allergens: ['Vegetarian']
        },
        {
          id: 'dish-mushroom-manchurian',
          name: 'Mushroom Manchurian',
          tamil: 'காளான் மஞ்சூரியன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: true,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/mushroom-manchurian.jpg',
          desc: 'Button mushrooms simmered in classic Chinese ginger-garlic Manchurian glaze.',
          ingredients: ['Mushrooms', 'Garlic', 'Ginger', 'Soy Sauce', 'Spring Onions'],
          allergens: ['Vegetarian', 'Contains Soy']
        },

        // CHICKEN (NON-VEG)
        {
          id: 'dish-chicken-65-boneless',
          name: 'Chicken 65 Boneless (8 pieces)',
          tamil: 'போன்லெஸ் சிக்கன் 65 (8 துண்டுகள்)',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: true,
          price: 180,
          portion: '8 Boneless Pieces',
          spiceLevel: 2,
          image: 'images/chicken-65-boneless.jpg',
          desc: 'Crisp-fried ruby red tender chicken bites with crushed garlic, roasted cumin and crackling curry leaves.',
          ingredients: ['Farm Chicken Boneless', 'Red Chili Paste', 'Garlic', 'Curry Leaves', 'Lemon'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-chicken-lollipop',
          name: 'Chicken Lollipop (5 pieces)',
          tamil: 'சிக்கன் லாலிபாப் (5 துண்டுகள்)',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: true,
          price: 170,
          portion: '5 Pieces',
          spiceLevel: 2,
          image: 'images/chicken-lollipop.jpg',
          desc: 'Frenched chicken winglets crisp-fried to a golden crunch, served with spicy garlic dip.',
          ingredients: ['Chicken Winglets', 'Ginger-Garlic', 'Red Spices', 'Egg Wash'],
          allergens: ['100% Halal', 'Contains Egg']
        },
        {
          id: 'dish-saucy-chicken-lollipop',
          name: 'Saucy Chicken Lollipop',
          tamil: 'சாஸி சிக்கன் லாலிபாப்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: true,
          price: 200,
          portion: '5 Pieces',
          spiceLevel: 2,
          image: 'images/saucy-chicken-lollipop.jpg',
          desc: 'Crispy chicken lollipops generously coated in fiery sweet-spicy Indo-Chinese sauce.',
          ingredients: ['Chicken Winglets', 'Chili Garlic Sauce', 'Spring Onions', 'Sesame'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-chettinadu-chicken',
          name: 'Chettinadu Chicken',
          tamil: 'செட்டிநாடு சிக்கன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: false,
          price: 190,
          portion: 'Full Plate',
          spiceLevel: 3,
          image: 'images/chettinadu-chicken.jpg',
          desc: 'Aromatic roasted masala chicken cooked with stone-flower (kalpasi), star anise and fresh curry leaves.',
          ingredients: ['Chicken', 'Chettinad Masala', 'Black Pepper', 'Curry Leaves'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-chicken-manchurian',
          name: 'Chicken Manchurian',
          tamil: 'சிக்கன் மஞ்சூரியன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/chicken-manchurian.jpg',
          desc: 'Golden fried chicken chunks tossed in savory garlic-coriander dark soy sauce.',
          ingredients: ['Chicken', 'Dark Soy', 'Garlic', 'Green Chilies', 'Spring Onion'],
          allergens: ['100% Halal', 'Contains Soy']
        },
        {
          id: 'dish-chilli-chicken',
          name: 'Chilli Chicken',
          tamil: 'சில்லி சிக்கன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: true,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/chilli-chicken.jpg',
          desc: 'Classic Indo-Chinese diced chicken wok-tossed with capsicum, onions, and hot chili glaze.',
          ingredients: ['Chicken', 'Green Bell Peppers', 'Onions', 'Chili Sauce'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-honey-chilli-chicken',
          name: 'Crispy Honey Chilli Chicken',
          tamil: 'ஹனி சில்லி சிக்கன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/honey-chilli-chicken.jpg',
          desc: 'Crispy shredded chicken glazed in sweet honey with a fiery chili kick and toasted sesame.',
          ingredients: ['Chicken Strips', 'Pure Honey', 'Chili Flakes', 'Sesame'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-dragon-chicken',
          name: 'Dragon Chicken',
          tamil: 'டிராகன் சிக்கன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: true,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 3,
          image: 'images/dragon-chicken.jpg',
          desc: 'Crispy chicken strips tossed in spicy red dragon sauce with crunchy roasted cashew nuts.',
          ingredients: ['Chicken Strips', 'Cashew Nuts', 'Red Chili Paste', 'Capsicum'],
          allergens: ['100% Halal', 'Contains Nuts']
        },
        {
          id: 'dish-garlic-chicken',
          name: 'Garlic Chicken',
          tamil: 'கார்லிக் சிக்கன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/garlic-chicken.jpg',
          desc: 'Tender chicken tossed in a deeply aromatic roasted golden garlic and green chili sauce.',
          ingredients: ['Chicken', 'Roasted Garlic', 'Green Chilies', 'Spring Onions'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-ginger-chicken',
          name: 'Ginger Chicken',
          tamil: 'இஞ்சி சிக்கன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/ginger-chicken.jpg',
          desc: 'Chicken pieces stir-fried with julienned fresh ginger root, onions and dark pepper sauce.',
          ingredients: ['Chicken', 'Fresh Ginger', 'Onions', 'Pepper Sauce'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-japan-chicken',
          name: 'Japan Chicken',
          tamil: 'ஜப்பான் சிக்கன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 1,
          image: 'images/japan-chicken.jpg',
          desc: 'Mild, sweet and savory glazed chicken cooked in creamy Japanese-style butter sauce.',
          ingredients: ['Chicken', 'Butter Glaze', 'Cashews', 'Mild Spices'],
          allergens: ['100% Halal', 'Contains Dairy']
        },
        {
          id: 'dish-kakinada-chicken',
          name: 'Kakinada Chicken',
          tamil: 'காக்கிநாடா சிக்கன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: true,
          price: 200,
          portion: 'Full Plate',
          spiceLevel: 3,
          image: 'images/kakinada-chicken.jpg',
          desc: 'Fiery Andhra coastal recipe with Guntur red chilies, roasted coriander and curry leaves.',
          ingredients: ['Chicken', 'Guntur Red Chili', 'Coriander Seeds', 'Curry Leaves'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-lemon-chicken',
          name: 'Lemon Chicken',
          tamil: 'லெமன் சிக்கன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 1,
          image: 'images/lemon-chicken.jpg',
          desc: 'Tangy and zesty chicken pieces tossed with freshly squeezed lemon juice and mild spices.',
          ingredients: ['Chicken', 'Fresh Lemon Juice', 'Ginger-Garlic', 'Curry Leaves'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-lemon-pepper-chicken',
          name: 'Lemon Pepper Chicken',
          tamil: 'லெமன் பெப்பர் சிக்கன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: false,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/lemon-pepper-chicken.jpg',
          desc: 'Crispy chicken cubes tossed with crushed black peppercorns and tangy lemon zest.',
          ingredients: ['Chicken', 'Crushed Black Pepper', 'Lemon Zest', 'Garlic'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-pepper-chicken',
          name: 'Salt and Pepper Chicken',
          tamil: 'பெப்பர் சிக்கன்',
          category: 'Starters (Veg & Non-Veg)',
          isVeg: false,
          isSignature: true,
          price: 180,
          portion: 'Full Plate',
          spiceLevel: 3,
          image: 'images/pepper-chicken.jpg',
          desc: 'Pan-fried boneless chicken tossed with sea salt, Tellicherry black pepper and crispy shallots.',
          ingredients: ['Chicken', 'Tellicherry Black Pepper', 'Shallots', 'Curry Leaves'],
          allergens: ['100% Halal']
        }
      ]
    },

    {
      id: 'cat-biriyani',
      categoryName: 'Biriyani Specials',
      categorySubtitle: 'Slow-cooked woodfire dum biriyani with fragrant rice, egg & signature meat combos',
      items: [
        {
          id: 'dish-chicken-biryani',
          name: 'Chicken Biryani',
          tamil: 'சிக்கன் பிரியாணி',
          category: 'Biriyani Specials',
          isVeg: false,
          isSignature: true,
          price: 160,
          portion: 'Regular (Serves 1)',
          spiceLevel: 2,
          image: 'images/chicken-biryani.jpg',
          desc: 'Tender farm chicken pieces dum-cooked with fragrant Seeraga Samba rice, cow ghee, mint and aromatic spices.',
          ingredients: ['Chicken', 'Seeraga Samba Rice', 'Pure Ghee', 'Curd', 'Mint & Spices'],
          allergens: ['100% Halal', 'Gluten Free']
        },
        {
          id: 'dish-egg-biriyani',
          name: 'Egg Biriyani',
          tamil: 'முட்டை பிரியாணி',
          category: 'Biriyani Specials',
          isVeg: false,
          isSignature: false,
          price: 120,
          portion: 'Regular (Serves 1)',
          spiceLevel: 2,
          image: 'images/egg-biryani.jpg',
          desc: 'Golden pan-roasted farm eggs served over fragrant firewood dum-simmered biryani rice.',
          ingredients: ['Farm Eggs', 'Dum Biryani Rice', 'Caramelized Shallots', 'Ghee'],
          allergens: ['Contains Egg', 'Gluten Free']
        },
        {
          id: 'dish-plain-biriyani',
          name: 'Plain Biriyani (Kuska)',
          tamil: 'குஸ்கா / பிளைன் பிரியாணி',
          category: 'Biriyani Specials',
          isVeg: false,
          isSignature: false,
          price: 110,
          portion: 'Regular (Serves 1)',
          spiceLevel: 2,
          image: 'images/plain-biryani.jpg',
          desc: 'Aromatic Seeraga Samba dum rice slow-cooked in rich meat broth, pure ghee and whole spices.',
          ingredients: ['Seeraga Samba Rice', 'Rich Biryani Broth', 'Pure Ghee', 'Whole Spices'],
          allergens: ['100% Halal', 'Gluten Free']
        },
        {
          id: 'dish-biriyani-65-combo',
          name: 'Plain Biriyani with 65 (3 Pcs)',
          tamil: 'குஸ்கா வித் சிக்கன் 65 (3 துண்டுகள்)',
          category: 'Biriyani Specials',
          isVeg: false,
          isSignature: true,
          price: 170,
          portion: 'Biryani + 3 Pcs Chicken 65',
          spiceLevel: 2,
          image: 'images/biryani-65-combo.jpg',
          desc: 'Fragrant dum biryani rice served with 3 crispy boneless Chicken 65 pieces, dalcha & raita.',
          ingredients: ['Dum Rice', '3 Pcs Chicken 65', 'Dalcha Gravy', 'Onion Raita'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-biriyani-lollipop-combo',
          name: 'Plain Biriyani with Lollipop (2 Pcs)',
          tamil: 'குஸ்கா வித் லாலிபாப் (2 துண்டுகள்)',
          category: 'Biriyani Specials',
          isVeg: false,
          isSignature: true,
          price: 170,
          portion: 'Biryani + 2 Pcs Lollipop',
          spiceLevel: 2,
          image: 'images/biryani-lollipop-combo.jpg',
          desc: 'Aromatic dum rice paired with 2 crispy golden fried Chicken Lollipops and sides.',
          ingredients: ['Dum Rice', '2 Pcs Chicken Lollipop', 'Dalcha Gravy', 'Raita'],
          allergens: ['100% Halal']
        }
      ]
    },

    {
      id: 'cat-chinese-combo',
      categoryName: 'Chinese Combos',
      categorySubtitle: 'Value meal combos: Choice of Rice/Noodles + Sizzling Gravy + Fresh Lemon Juice',
      items: [
        // VEG COMBOS
        {
          id: 'dish-combo-veg-gobi-manchurian',
          name: 'Veg Rice/Noodles + Gobi Manchurian + Lemon Juice',
          tamil: 'வெஜ் காம்போ (கோபி மஞ்சூரியன் + ஜூஸ்)',
          category: 'Chinese Combos',
          isVeg: true,
          isSignature: false,
          price: 250,
          portion: 'Full Combo Meal',
          spiceLevel: 2,
          image: 'images/veg-chinese-combo.jpg',
          desc: 'Wok-tossed Veg Fried Rice or Noodles served with rich Gobi Manchurian and chilled Lemon Juice.',
          ingredients: ['Fried Rice/Noodles', 'Gobi Manchurian', 'Fresh Lemon Juice'],
          allergens: ['Vegetarian']
        },
        {
          id: 'dish-combo-veg-chilli-gobi',
          name: 'Veg Rice/Noodles + Chilli Gobi + Lemon Juice',
          tamil: 'வெஜ் காம்போ (சில்லி கோபி + ஜூஸ்)',
          category: 'Chinese Combos',
          isVeg: true,
          isSignature: false,
          price: 250,
          portion: 'Full Combo Meal',
          spiceLevel: 2,
          image: 'images/veg-chinese-combo.jpg',
          desc: 'Veg Rice or Hakka Noodles paired with spicy Chilli Gobi and refreshing chilled Lemon Juice.',
          ingredients: ['Fried Rice/Noodles', 'Chilli Gobi', 'Lemon Juice'],
          allergens: ['Vegetarian']
        },
        {
          id: 'dish-combo-veg-paneer-manchurian',
          name: 'Veg Rice/Noodles + Paneer Manchurian + Lemon Juice',
          tamil: 'வெஜ் காம்போ (பன்னீர் மஞ்சூரியன் + ஜூஸ்)',
          category: 'Chinese Combos',
          isVeg: true,
          isSignature: false,
          price: 250,
          portion: 'Full Combo Meal',
          spiceLevel: 2,
          image: 'images/veg-chinese-combo.jpg',
          desc: 'Fried Rice or Noodles with succulent Paneer Manchurian and fresh citrus Lemon Juice.',
          ingredients: ['Fried Rice/Noodles', 'Paneer Manchurian', 'Lemon Juice'],
          allergens: ['Vegetarian', 'Contains Dairy']
        },
        {
          id: 'dish-combo-veg-chilli-paneer',
          name: 'Veg Rice/Noodles + Chilli Paneer + Lemon Juice',
          tamil: 'வெஜ் காம்போ (சில்லி பன்னீர் + ஜூஸ்)',
          category: 'Chinese Combos',
          isVeg: true,
          isSignature: true,
          price: 250,
          portion: 'Full Combo Meal',
          spiceLevel: 2,
          image: 'images/veg-chinese-combo.jpg',
          desc: 'Wok-tossed Rice or Noodles accompanied by spicy Chilli Paneer gravy and Lemon Juice.',
          ingredients: ['Fried Rice/Noodles', 'Chilli Paneer', 'Lemon Juice'],
          allergens: ['Vegetarian', 'Contains Dairy']
        },

        // NON-VEG COMBOS
        {
          id: 'dish-combo-chicken-chilli',
          name: 'Chicken Rice/Noodles + Chilli Chicken + Lemon Juice',
          tamil: 'சிக்கன் காம்போ (சில்லி சிக்கன் + ஜூஸ்)',
          category: 'Chinese Combos',
          isVeg: false,
          isSignature: true,
          price: 250,
          portion: 'Full Combo Meal',
          spiceLevel: 2,
          image: 'images/nonveg-chinese-combo.jpg',
          desc: 'Egg-chicken Fried Rice or Noodles served with spicy Chilli Chicken gravy and Lemon Juice.',
          ingredients: ['Chicken Fried Rice/Noodles', 'Chilli Chicken Gravy', 'Fresh Lemon Juice'],
          allergens: ['100% Halal', 'Contains Egg']
        },
        {
          id: 'dish-combo-chicken-manchurian',
          name: 'Chicken Rice/Noodles + Chicken Manchurian + Lemon Juice',
          tamil: 'சிக்கன் காம்போ (சிக்கன் மஞ்சூரியன் + ஜூஸ்)',
          category: 'Chinese Combos',
          isVeg: false,
          isSignature: false,
          price: 250,
          portion: 'Full Combo Meal',
          spiceLevel: 2,
          image: 'images/nonveg-chinese-combo.jpg',
          desc: 'Chicken Rice or Noodles accompanied by rich Chicken Manchurian gravy and Lemon Juice.',
          ingredients: ['Chicken Rice/Noodles', 'Chicken Manchurian', 'Lemon Juice'],
          allergens: ['100% Halal', 'Contains Soy']
        },
        {
          id: 'dish-combo-chicken-garlic',
          name: 'Chicken Rice/Noodles + Garlic Chicken + Lemon Juice',
          tamil: 'சிக்கன் காம்போ (கார்லிக் சிக்கன் + ஜூஸ்)',
          category: 'Chinese Combos',
          isVeg: false,
          isSignature: false,
          price: 250,
          portion: 'Full Combo Meal',
          spiceLevel: 2,
          image: 'images/nonveg-chinese-combo.jpg',
          desc: 'Savory Chicken Fried Rice or Noodles paired with roasted Garlic Chicken and Lemon Juice.',
          ingredients: ['Chicken Rice/Noodles', 'Garlic Chicken Gravy', 'Lemon Juice'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-combo-chicken-ginger',
          name: 'Chicken Rice/Noodles + Ginger Chicken + Lemon Juice',
          tamil: 'சிக்கன் காம்போ (இஞ்சி சிக்கன் + ஜூஸ்)',
          category: 'Chinese Combos',
          isVeg: false,
          isSignature: false,
          price: 250,
          portion: 'Full Combo Meal',
          spiceLevel: 2,
          image: 'images/nonveg-chinese-combo.jpg',
          desc: 'Chicken Fried Rice or Noodles paired with zesty Ginger Chicken gravy and Lemon Juice.',
          ingredients: ['Chicken Rice/Noodles', 'Ginger Chicken Gravy', 'Lemon Juice'],
          allergens: ['100% Halal']
        },
        {
          id: 'dish-addon-egg',
          name: 'Add on Egg (For Combos / Fried Rice)',
          tamil: 'முட்டை கூடுதல்',
          category: 'Chinese Combos',
          isVeg: false,
          isSignature: false,
          price: 10,
          portion: '1 Farm Egg',
          spiceLevel: 0,
          image: 'images/egg-dosa.jpg',
          desc: 'Extra scrambled or sunny side farm egg added to any rice, noodle, or combo dish.',
          ingredients: ['Farm Fresh Egg'],
          allergens: ['Contains Egg']
        }
      ]
    },

    {
      id: 'cat-parotta',
      categoryName: 'Parotta Specials & Breads',
      categorySubtitle: 'Flaky layered parottas, Madurai bun parotta, spicy kothu & stuffed lappa',
      items: [
        {
          id: 'dish-chapati-set',
          name: 'Chapati SET (2 pieces)',
          tamil: 'சப்பாத்தி செட் (2 துண்டுகள்)',
          category: 'Parotta Specials & Breads',
          isVeg: true,
          isSignature: false,
          price: 50,
          portion: '2 Pieces with Gravy',
          spiceLevel: 1,
          image: 'images/chapati-set.jpg',
          desc: 'Soft, whole wheat tawa chapatis served hot with rich vegetable kurma and spicy salna.',
          ingredients: ['Whole Wheat Flour', 'Curry Leaves', 'Kurma Gravy'],
          allergens: ['Vegetarian', 'Contains Wheat']
        },
        {
          id: 'dish-parotta-set',
          name: 'Parotta SET (2 pieces)',
          tamil: 'பரோட்டா செட் (2 துண்டுகள்)',
          category: 'Parotta Specials & Breads',
          isVeg: true,
          isSignature: true,
          price: 50,
          portion: '2 Pieces with Salna',
          spiceLevel: 2,
          image: 'images/parotta-set.jpg',
          desc: 'Golden flaky, hand-kneaded layered parottas crushed while hot, served with rich woodfire salna.',
          ingredients: ['Flour', 'Clarified Butter', 'Spiced Salna Gravy'],
          allergens: ['Vegetarian', 'Contains Wheat']
        },
        {
          id: 'dish-bun-parotta',
          name: 'Madurai Bun Parotta (per piece)',
          tamil: 'மதுரை பன் பரோட்டா (1 துண்டு)',
          category: 'Parotta Specials & Breads',
          isVeg: true,
          isSignature: true,
          price: 35,
          portion: '1 Bun Parotta',
          spiceLevel: 1,
          image: 'images/bun-parotta.jpg',
          desc: 'Thick round pillow of buttery spiral layers, golden crispy on the outside and airy inside.',
          ingredients: ['Fine Flour', 'Pure Ghee', 'Salna'],
          allergens: ['Vegetarian', 'Contains Wheat']
        },
        {
          id: 'dish-coin-salna-parotta',
          name: 'Coin Salna Parotta',
          tamil: 'காயின் சால்னா பரோட்டா',
          category: 'Parotta Specials & Breads',
          isVeg: true,
          isSignature: false,
          price: 120,
          portion: 'Plate',
          spiceLevel: 2,
          image: 'images/coin-salna-parotta.jpg',
          desc: 'Miniature coin-sized golden parottas soaked in flavorful chicken or veg salna gravy.',
          ingredients: ['Coin Parottas', 'Rich Salna Gravy', 'Coriander'],
          allergens: ['Contains Wheat']
        },
        {
          id: 'dish-chilli-parotta',
          name: 'Chilli Parotta',
          tamil: 'சில்லி பரோட்டா',
          category: 'Parotta Specials & Breads',
          isVeg: true,
          isSignature: true,
          price: 130,
          portion: 'Full Plate',
          spiceLevel: 3,
          image: 'images/chilli-parotta.jpg',
          desc: 'Crispy parotta pieces tossed on a hot griddle with capsicum, shallots, and spicy chili sauce.',
          ingredients: ['Shredded Parotta', 'Capsicum', 'Shallots', 'Chili Sauce'],
          allergens: ['Vegetarian', 'Contains Wheat']
        },
        {
          id: 'dish-kizhi-parotta',
          name: 'Kizhi Parotta',
          tamil: 'வாழை இலை கிழி பரோட்டா',
          category: 'Parotta Specials & Breads',
          isVeg: false,
          isSignature: true,
          price: 180,
          portion: '1 Banana Leaf Bundle',
          spiceLevel: 2,
          image: 'images/kizhi-parotta.jpg',
          desc: 'Parottas layered with succulent spiced chicken gravy, bundled in smoked banana leaf and tawa-steamed.',
          ingredients: ['Parotta', 'Spiced Chicken Gravy', 'Banana Leaf', 'Ghee'],
          allergens: ['100% Halal', 'Contains Wheat']
        },
        {
          id: 'dish-egg-kothu-parotta',
          name: 'Egg Kothu Parotta',
          tamil: 'முட்டை கொத்து பரோட்டா',
          category: 'Parotta Specials & Breads',
          isVeg: false,
          isSignature: false,
          price: 120,
          portion: 'Full Plate',
          spiceLevel: 2,
          image: 'images/egg-kothu-parotta.jpg',
          desc: 'Shredded parotta minced on iron tawa with scrambled farm eggs, onions, green chilies and salna.',
          ingredients: ['Shredded Parotta', 'Farm Eggs', 'Salna', 'Curry Leaves'],
          allergens: ['Contains Egg', 'Contains Wheat']
        },
        {
          id: 'dish-chicken-kothu-parotta',
          name: 'Chicken Kothu Parotta',
          tamil: 'சிக்கன் கொத்து பரோட்டா',
          category: 'Parotta Specials & Breads',
          isVeg: false,
          isSignature: true,
          price: 150,
          portion: 'Full Plate',
          spiceLevel: 3,
          image: 'images/chicken-kothu-parotta.jpg',
          desc: 'Finely chopped parotta clattered on high-heat tawa with boneless chicken pieces, eggs, and gravy.',
          ingredients: ['Parotta', 'Tender Chicken', 'Eggs', 'Spicy Salna', 'Black Pepper'],
          allergens: ['100% Halal', 'Contains Egg', 'Contains Wheat']
        },
        {
          id: 'dish-egg-lappa',
          name: 'Egg Lappa',
          tamil: 'முட்டை லப்பா',
          category: 'Parotta Specials & Breads',
          isVeg: false,
          isSignature: false,
          price: 90,
          portion: '1 Square Lappa',
          spiceLevel: 2,
          image: 'images/egg-lappa.jpg',
          desc: 'Thin stretched veechu envelope stuffed with spiced beaten egg and shallow-fried in ghee.',
          ingredients: ['Stretched Dough', 'Spiced Egg Mixture', 'Shallots', 'Ghee'],
          allergens: ['Contains Egg', 'Contains Wheat']
        },
        {
          id: 'dish-chicken-lappa',
          name: 'Chicken Lappa',
          tamil: 'சிக்கன் லப்பா',
          category: 'Parotta Specials & Breads',
          isVeg: false,
          isSignature: true,
          price: 150,
          portion: '1 Square Lappa',
          spiceLevel: 2,
          image: 'images/chicken-lappa.jpg',
          desc: 'Ceylon-style layered murtabak envelope packed with minced spiced chicken, eggs and onions.',
          ingredients: ['Veechu Dough', 'Spiced Minced Chicken', 'Eggs', 'Ghee'],
          allergens: ['100% Halal', 'Contains Egg', 'Contains Wheat']
        },
        {
          id: 'dish-plain-veechu-parotta',
          name: 'Plain Veechu Parotta',
          tamil: 'வீச்சு பரோட்டா',
          category: 'Parotta Specials & Breads',
          isVeg: true,
          isSignature: false,
          price: 30,
          portion: '1 Piece',
          spiceLevel: 1,
          image: 'images/veechu-parotta.jpg',
          desc: 'Thin, airy, hand-spun stretched parotta folded into a square and cooked crisp on tawa.',
          ingredients: ['Fine Flour', 'Ghee', 'Salna'],
          allergens: ['Vegetarian', 'Contains Wheat']
        },
        {
          id: 'dish-egg-veechu-parotta',
          name: 'Egg Veechu Parotta',
          tamil: 'முட்டை வீச்சு பரோட்டா',
          category: 'Parotta Specials & Breads',
          isVeg: false,
          isSignature: false,
          price: 50,
          portion: '1 Piece',
          spiceLevel: 2,
          image: 'images/egg-veechu-parotta.jpg',
          desc: 'Spun veechu parotta cooked with a layer of beaten spiced farm egg on top.',
          ingredients: ['Veechu Parotta', 'Farm Egg', 'Curry Leaves'],
          allergens: ['Contains Egg', 'Contains Wheat']
        }
      ]
    },

    {
      id: 'cat-dosa',
      categoryName: 'Dosa Varieties',
      categorySubtitle: 'Crisp golden tawa roasts, spicy podi dosas, stuffed varieties & Madurai Kari Dosa',
      items: [
        // VEG DOSA
        {
          id: 'dish-plain-dosa',
          name: 'Plain Dosa',
          tamil: 'பிளைன் தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: false,
          price: 50,
          portion: '1 Dosa with Chutneys & Sambar',
          spiceLevel: 1,
          image: 'images/plain-dosa.jpg',
          desc: 'Classic golden crispy fermented rice & lentil crepe cooked on cast-iron tawa.',
          ingredients: ['Rice & Urad Dal Batter', 'Gingelly Oil'],
          allergens: ['Vegetarian', 'Gluten Free']
        },
        {
          id: 'dish-kal-dosa-set',
          name: 'Kal Dosa SET (2 pieces)',
          tamil: 'கல் தோசை செட் (2 துண்டுகள்)',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: false,
          price: 50,
          portion: '2 Soft Dosas',
          spiceLevel: 1,
          image: 'images/kal-dosa.jpg',
          desc: 'Two thick, spongy, melt-in-mouth soft dosas cooked with gentle golden crust.',
          ingredients: ['Fermented Batter', 'Chutneys', 'Tiffin Sambar'],
          allergens: ['Vegetarian', 'Gluten Free']
        },
        {
          id: 'dish-kal-nice-dosa',
          name: 'Kal Nice Dosa',
          tamil: 'கல் நைஸ் தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: false,
          price: 35,
          portion: '1 Piece',
          spiceLevel: 1,
          image: 'images/kal-nice-dosa.jpg',
          desc: 'Thin, crispy yet tender tawa dosa served with assorted coconut & tomato chutneys.',
          ingredients: ['Rice Batter', 'Chutneys'],
          allergens: ['Vegetarian', 'Gluten Free']
        },
        {
          id: 'dish-ghee-dosa',
          name: 'Ghee Dosa',
          tamil: 'நெய் தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: true,
          price: 90,
          portion: '1 Large Roast',
          spiceLevel: 1,
          image: 'images/ghee-dosa.jpg',
          desc: 'Extra crispy paper-thin golden roast drenched in pure farm cow ghee.',
          ingredients: ['Rice Batter', 'Pure Cow Ghee', 'Sambar & Chutneys'],
          allergens: ['Vegetarian', 'Contains Dairy', 'Gluten Free']
        },
        {
          id: 'dish-butter-dosa',
          name: 'Butter Dosa',
          tamil: 'பட்டர் தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: false,
          price: 80,
          portion: '1 Large Roast',
          spiceLevel: 1,
          image: 'images/butter-dosa.jpg',
          desc: 'Crisp golden crepe roasted with a generous slab of melting salted farmhouse butter.',
          ingredients: ['Rice Batter', 'Farm Butter', 'Chutneys'],
          allergens: ['Vegetarian', 'Contains Dairy', 'Gluten Free']
        },
        {
          id: 'dish-podi-dosa',
          name: 'Podi Dosa',
          tamil: 'பொடி தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: true,
          price: 60,
          portion: '1 Roast',
          spiceLevel: 2,
          image: 'images/podi-dosa.jpg',
          desc: 'Crispy roast coated inside out with spicy roasted lentil gunpowder idli podi.',
          ingredients: ['Batter', 'Roasted Lentil Podi', 'Sesame Oil'],
          allergens: ['Vegetarian', 'Gluten Free']
        },
        {
          id: 'dish-ghee-podi-dosa',
          name: 'Ghee Podi Dosa',
          tamil: 'நெய் பொடி தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: true,
          price: 100,
          portion: '1 Large Roast',
          spiceLevel: 2,
          image: 'images/ghee-podi-dosa.jpg',
          desc: 'The ultimate royal combination: pure cow ghee roasted dosa sprinkled with fiery spicy podi.',
          ingredients: ['Batter', 'Pure Cow Ghee', 'House Gunpowder Podi'],
          allergens: ['Vegetarian', 'Contains Dairy', 'Gluten Free']
        },
        {
          id: 'dish-butter-podi-dosa',
          name: 'Butter Podi Dosa',
          tamil: 'பட்டர் பொடி தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: false,
          price: 90,
          portion: '1 Large Roast',
          spiceLevel: 2,
          image: 'images/butter-podi-dosa.jpg',
          desc: 'Creamy melted butter mixed with spicy gunpowder podi spread over a crispy dosa.',
          ingredients: ['Batter', 'Butter', 'Idli Podi'],
          allergens: ['Vegetarian', 'Contains Dairy', 'Gluten Free']
        },
        {
          id: 'dish-garlic-dosa',
          name: 'Garlic Dosa',
          tamil: 'பூண்டு தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: false,
          price: 80,
          portion: '1 Roast',
          spiceLevel: 2,
          image: 'images/garlic-dosa.jpg',
          desc: 'Golden roast spread with house-ground spicy roasted garlic paste.',
          ingredients: ['Batter', 'Spiced Garlic Paste', 'Gingelly Oil'],
          allergens: ['Vegetarian', 'Gluten Free']
        },
        {
          id: 'dish-butter-garlic-dosa',
          name: 'Butter Garlic Dosa',
          tamil: 'பட்டர் பூண்டு தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: false,
          price: 90,
          portion: '1 Roast',
          spiceLevel: 2,
          image: 'images/butter-garlic-dosa.jpg',
          desc: 'Crispy roast layered with rich melting butter and aromatic roasted garlic chutney.',
          ingredients: ['Batter', 'Butter', 'Garlic Chutney'],
          allergens: ['Vegetarian', 'Contains Dairy', 'Gluten Free']
        },
        {
          id: 'dish-onion-dosa',
          name: 'Onion Dosa',
          tamil: 'வெங்காய தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: false,
          price: 70,
          portion: '1 Roast',
          spiceLevel: 1,
          image: 'images/onion-dosa.jpg',
          desc: 'Crispy crepe studded with finely chopped caramelized shallots, green chilies and coriander.',
          ingredients: ['Batter', 'Finely Diced Onions', 'Coriander', 'Green Chilies'],
          allergens: ['Vegetarian', 'Gluten Free']
        },
        {
          id: 'dish-onion-podi-dosa',
          name: 'Onion Podi Dosa',
          tamil: 'வெங்காய பொடி தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: false,
          price: 80,
          portion: '1 Roast',
          spiceLevel: 2,
          image: 'images/onion-podi-dosa.jpg',
          desc: 'Crisp dosa loaded with crunchy caramelized onions and spicy gunpowder podi.',
          ingredients: ['Batter', 'Onions', 'Lentil Podi', 'Ghee'],
          allergens: ['Vegetarian', 'Gluten Free']
        },
        {
          id: 'dish-onion-uthappam',
          name: 'Onion Uthappam',
          tamil: 'வெங்காய ஊத்தப்பம்',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: false,
          price: 60,
          portion: '1 Thick Uthappam',
          spiceLevel: 1,
          image: 'images/onion-uthappam.jpg',
          desc: 'Thick, fluffy tawa pancake topped generously with caramelized onions, green chilies, and curry leaves.',
          ingredients: ['Fermented Batter', 'Shallots', 'Green Chilies', 'Curry Leaves'],
          allergens: ['Vegetarian', 'Gluten Free']
        },
        {
          id: 'dish-gobi-dosa',
          name: 'Gobi Dosa',
          tamil: 'கோபி தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: false,
          price: 140,
          portion: '1 Stuffed Roast',
          spiceLevel: 2,
          image: 'images/gobi-dosa.jpg',
          desc: 'Crisp golden dosa stuffed with spicy, flavorful sauteed spiced cauliflower masala.',
          ingredients: ['Batter', 'Spiced Gobi Masala', 'Onions', 'Chutneys'],
          allergens: ['Vegetarian', 'Gluten Free']
        },
        {
          id: 'dish-paneer-dosa',
          name: 'Paneer Dosa',
          tamil: 'பன்னீர் தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: true,
          price: 150,
          portion: '1 Stuffed Roast',
          spiceLevel: 2,
          image: 'images/paneer-dosa.jpg',
          desc: 'Rich dosa filled with grated malai paneer cooked with onions, tomatoes and garam masala.',
          ingredients: ['Batter', 'Grated Fresh Paneer', 'Butter', 'Spices'],
          allergens: ['Vegetarian', 'Contains Dairy', 'Gluten Free']
        },
        {
          id: 'dish-mushroom-dosa',
          name: 'Mushroom Dosa',
          tamil: 'காளான் தோசை',
          category: 'Dosa Varieties',
          isVeg: true,
          isSignature: false,
          price: 160,
          portion: '1 Stuffed Roast',
          spiceLevel: 2,
          image: 'images/mushroom-dosa.jpg',
          desc: 'Crispy roast stuffed with juicy, peppery pan-roasted mushroom masala.',
          ingredients: ['Batter', 'Button Mushrooms', 'Pepper Masala', 'Onions'],
          allergens: ['Vegetarian', 'Gluten Free']
        },

        // NON-VEG DOSA
        {
          id: 'dish-egg-dosa',
          name: 'Egg Dosa',
          tamil: 'முட்டை தோசை',
          category: 'Dosa Varieties',
          isVeg: false,
          isSignature: true,
          price: 60,
          portion: '1 Dosa',
          spiceLevel: 1,
          image: 'images/egg-dosa.jpg',
          desc: 'Hot tawa dosa spread with beaten spiced farm egg, black pepper and curry leaves.',
          ingredients: ['Rice Batter', 'Farm Egg', 'Black Pepper', 'Salna'],
          allergens: ['Contains Egg', 'Gluten Free']
        },
        {
          id: 'dish-kal-egg-dosa',
          name: 'Kal Egg Dosa',
          tamil: 'கல் முட்டை தோசை',
          category: 'Dosa Varieties',
          isVeg: false,
          isSignature: false,
          price: 40,
          portion: '1 Soft Egg Dosa',
          spiceLevel: 1,
          image: 'images/kal-egg-dosa.jpg',
          desc: 'Thick spongy soft kal dosa layered with beaten egg and cooked to soft tenderness.',
          ingredients: ['Soft Batter', 'Farm Egg', 'Pepper'],
          allergens: ['Contains Egg', 'Gluten Free']
        },
        {
          id: 'dish-kal-nice-egg-dosa',
          name: 'Kal Nice Egg Dosa',
          tamil: 'கல் நைஸ் முட்டை தோசை',
          category: 'Dosa Varieties',
          isVeg: false,
          isSignature: false,
          price: 50,
          portion: '1 Piece',
          spiceLevel: 1,
          image: 'images/kal-nice-egg-dosa.jpg',
          desc: 'Crispy thin kal dosa glazed with seasoned farm egg and shallow-fried golden.',
          ingredients: ['Batter', 'Farm Egg', 'Ghee'],
          allergens: ['Contains Egg', 'Gluten Free']
        },
        {
          id: 'dish-chicken-kari-dosa',
          name: 'Chicken Kari Dosa',
          tamil: 'மதுரை சிக்கன் கறி தோசை',
          category: 'Dosa Varieties',
          isVeg: false,
          isSignature: true,
          price: 150,
          portion: 'Signature 3-Layer Dosa',
          spiceLevel: 3,
          image: 'images/chicken-kari-dosa.jpg',
          desc: 'Madurai legendary 3-layer dosa: thick dosa base, egg omlette layer, topped with spicy shredded chicken kari.',
          ingredients: ['Dosa Batter', 'Egg Layer', 'Spicy Minced Chicken Kari', 'Ghee'],
          allergens: ['100% Halal', 'Contains Egg']
        }
      ]
    }
  ];

  // --- STATE MANAGEMENT ---
  let activeFilter = 'all'; // 'all', 'non-veg', 'veg', 'signature'
  let searchQuery = '';

  // DOM Elements
  const menuContainer = document.getElementById('menuContainer');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const filterButtons = document.querySelectorAll('.filter-pill');
  const categoryTabs = document.querySelectorAll('.cat-nav-tab');

  // --- RENDER ENGINE ---
  function renderMenu() {
    menuContainer.innerHTML = '';

    let totalVisibleItems = 0;
    const query = searchQuery.trim().toLowerCase();

    MENU_DATA.forEach(cat => {
      // Filter items in this category
      const matchedItems = cat.items.filter(item => {
        // Dietary filter check
        if (activeFilter === 'veg' && !item.isVeg) return false;
        if (activeFilter === 'non-veg' && item.isVeg) return false;
        if (activeFilter === 'signature' && !item.isSignature) return false;

        // Search text check
        if (query) {
          const haystack = `${item.name} ${item.tamil} ${item.desc} ${item.ingredients.join(' ')} ${cat.categoryName}`.toLowerCase();
          if (!haystack.includes(query)) return false;
        }

        return true;
      });

      if (matchedItems.length > 0) {
        totalVisibleItems += matchedItems.length;

        // Category Section Block
        const section = document.createElement('section');
        section.className = 'category-block';
        section.id = cat.id;

        // Category Header
        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `
          <div class="category-title-row">
            <h2 class="category-title"><span class="category-ornament-mark">❖</span> ${escapeHTML(cat.categoryName)}</h2>
            <span class="category-count">${matchedItems.length} item${matchedItems.length > 1 ? 's' : ''}</span>
          </div>
          <p class="category-subtitle">${escapeHTML(cat.categorySubtitle)}</p>
        `;
        section.appendChild(header);

        // Items Container
        const itemsList = document.createElement('div');
        itemsList.className = 'items-list';

        matchedItems.forEach(dish => {
          const card = createDishCard(dish);
          itemsList.appendChild(card);
        });

        section.appendChild(itemsList);
        menuContainer.appendChild(section);
      }
    });

    // If zero items match filter/search
    if (totalVisibleItems === 0) {
      menuContainer.innerHTML = `
        <div class="empty-menu-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
          <p class="empty-title">No Dishes Found</p>
          <p class="empty-desc">No items match your search "${escapeHTML(searchQuery || activeFilter)}". Try searching for parotta, dosa, biryani, chicken, paneer, or combo.</p>
          <button type="button" class="reset-search-link" id="resetSearchBtn">Reset Search & Filters</button>
        </div>
      `;

      const resetBtn = document.getElementById('resetSearchBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          searchInput.value = '';
          searchQuery = '';
          clearSearchBtn.hidden = true;
          setFilter('all');
        });
      }
    }

    // Refresh scrollspy observers
    setupScrollSpy();
  }

  // Create Individual Menu Card (Clean View-Only Card)
  function createDishCard(dish) {
    const card = document.createElement('article');
    card.className = `menu-card ${dish.isSignature ? 'chef-signature-card' : ''}`.trim();
    card.dataset.id = dish.id;

    // Spice meter dots with label
    let spiceHtml = '';
    if (dish.spiceLevel > 0) {
      const spiceLabels = { 1: 'Mild', 2: 'Medium', 3: 'Fiery' };
      const spiceText = spiceLabels[dish.spiceLevel] || '';
      spiceHtml = `<span class="spice-meter-dots" title="Spice Level: ${dish.spiceLevel}/3">${'🌶️'.repeat(dish.spiceLevel)} <span class="spice-label-text">${spiceText}</span></span>`;
    }

    // Signature chip
    const sigChip = dish.isSignature 
      ? `<span class="signature-chip">★ Special</span>` 
      : '';

    card.innerHTML = `
      <div class="card-details-col">
        <div>
          <div class="card-title-row">
            <span class="fssai-indicator ${dish.isVeg ? 'veg' : 'non-veg'}" aria-label="${dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
            <h3 class="dish-name-heading">${escapeHTML(dish.name)}</h3>
          </div>
          ${sigChip}
          <p class="dish-tamil-alias">${escapeHTML(dish.tamil)}</p>
          <p class="dish-desc-text">${escapeHTML(dish.desc)}</p>
        </div>

        <div class="card-bottom-row">
          <div class="price-container">
            <span class="currency-sym">₹</span>
            <span class="price-val">${dish.price}</span>
            <span class="portion-tag">${escapeHTML(dish.portion)}</span>
          </div>
          ${spiceHtml}
        </div>
      </div>

      <div class="card-media-col">
        <img 
          src="${escapeHTML(dish.image)}" 
          alt="${escapeHTML(dish.name)}" 
          class="card-food-img" 
          loading="lazy"
          decoding="async"
          onerror="this.style.opacity='0.3'; this.parentElement.style.backgroundColor='#EFE4D6';"
        >
      </div>
    `;

    return card;
  }

  // --- SEARCH ENGINE ---
  let debounceTimeout = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      searchQuery = e.target.value;
      clearSearchBtn.hidden = searchQuery.length === 0;
      renderMenu();
    }, 150);
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.hidden = true;
    searchInput.focus();
    renderMenu();
  });

  // --- FILTER TOGGLES ---
  function setFilter(filterType) {
    activeFilter = filterType;
    filterButtons.forEach(btn => {
      const isMatch = btn.dataset.filter === filterType;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });
    renderMenu();
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setFilter(btn.dataset.filter);
    });
  });

  // --- CATEGORY NAV CLICK HANDLER ---
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // If current search or filter hid this category, reset filters
        if (searchQuery || activeFilter !== 'all') {
          searchInput.value = '';
          searchQuery = '';
          clearSearchBtn.hidden = true;
          setFilter('all');
        }

        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveCategoryTab(tab);
      }
    });
  });

  function setActiveCategoryTab(activeTab) {
    categoryTabs.forEach(t => {
      const isCurrent = t === activeTab;
      t.classList.toggle('active', isCurrent);
      t.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    });

    // Auto horizontal scroll active tab into view
    activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  // --- SCROLLSPY OBSERVER ---
  let scrollObserver = null;
  function setupScrollSpy() {
    if (scrollObserver) {
      scrollObserver.disconnect();
    }

    const sections = document.querySelectorAll('.category-block');
    if (sections.length === 0) return;

    scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const catId = entry.target.id;
          const matchingTab = document.querySelector(`.cat-nav-tab[href="#${catId}"]`);
          if (matchingTab && !matchingTab.classList.contains('active')) {
            setActiveCategoryTab(matchingTab);
          }
        }
      });
    }, {
      root: null,
      rootMargin: '-130px 0px -70% 0px',
      threshold: 0.05
    });

    sections.forEach(s => scrollObserver.observe(s));
  }

  // --- FLOATING BACK TO TOP BUTTON ---
  const floatingTopBtn = document.getElementById('floatingTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      floatingTopBtn.classList.add('visible');
    } else {
      floatingTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  floatingTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- UTILS ---
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial Render
  renderMenu();

})();
