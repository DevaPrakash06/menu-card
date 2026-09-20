/**
 * KARUMBUR BIRYANI — DINE-IN QR MENU INTERACTIVE ENGINE
 * Authentic Royal Arcot Heritage Woodfire Dum Cuisine
 * Strictly Dine-In (No Cart, No Checkout, No Online Ordering)
 */

(function () {
  'use strict';

  // --- RESTAURANT DISH CATALOG ---
  const MENU_DATA = [
    {
      id: 'cat-biryani',
      categoryName: 'Dum Biryani Specials',
      categorySubtitle: 'Slow-cooked over marachekku woodfire embers with fragrant Seeraga Samba rice & pure cow ghee',
      items: [
        {
          id: 'dish-mutton-dum',
          name: 'Karumbur Special Mutton Biryani',
          tamil: 'கரும்பூர் ஸ்பெஷல் மட்டன் பிரியாணி',
          category: 'Dum Biryani Specials',
          isVeg: false,
          isSignature: true,
          price: 360,
          portion: 'Regular (Serves 1-2)',
          spiceLevel: 2, // 1: Mild, 2: Medium, 3: Fiery
          image: 'images/mutton-biryani.jpg',
          desc: 'Our 48-year signature recipe. Tender grass-fed young mutton cuts layered with aged Seeraga Samba rice, pure cow ghee, and saffron milk in sealed earthen degh.',
          story: 'Cooked in sealed copper handis over tamarind wood coals. The meat is marinated for 6 hours with curd, mint, and house-ground stone masala, producing meltingly tender mutton and non-sticky fragrant grains.',
          ingredients: ['Grass-fed Mutton', 'Seeraga Samba Rice', 'A2 Cow Ghee', 'Fresh Mint & Coriander', 'Stone-ground Garam Masala', 'Curd', 'Kashmir Saffron'],
          allergens: ['Contains Dairy (Ghee/Curd)', 'Gluten Free', '100% Halal'],
          pairing: 'Accompanied with traditional woodfire Dalcha brinjal curry & chilled onion pachadi.'
        },
        {
          id: 'dish-chicken-dum',
          name: 'Woodfire Chicken Dum Biryani',
          tamil: 'நாட்டுக்கோழி மரச்செக்கு பிரியாணி',
          category: 'Dum Biryani Specials',
          isVeg: false,
          isSignature: true,
          price: 260,
          portion: 'Regular (Serves 1-2)',
          spiceLevel: 2,
          image: 'images/chicken-biryani.jpg',
          desc: 'Succulent country chicken pieces dum-cooked with whole spices, caramelized shallots, fresh herbs, and fragrant rice.',
          story: 'Prepared using traditional Ambur-style dum method where chicken absorbs whole green cardamoms, cinnamon quills, and green chili broth without heavy artificial coloring.',
          ingredients: ['Farm Chicken', 'Seeraga Samba Rice', 'Shallots', 'Green Chilies', 'Pure Cow Ghee', 'Fresh Yogurt'],
          allergens: ['Contains Dairy', 'Gluten Free', '100% Halal'],
          pairing: 'Best enjoyed with sour brinjal dalcha and boiled egg.'
        },
        {
          id: 'dish-nalli-dum',
          name: 'Royal Nalli Gosht Biryani',
          tamil: 'ராயல் நவாபி நல்லி பிரியாணி',
          category: 'Dum Biryani Specials',
          isVeg: false,
          isSignature: true,
          price: 440,
          portion: 'Chef Signature (Serves 1-2)',
          spiceLevel: 2,
          image: 'images/nalli-biryani.jpg',
          desc: 'Slow-braised tender mutton shank marrow bones infused into aromatic dum rice. Rich, marrow-glazed, and deeply satisfying.',
          story: 'A tribute to the Arcot Nawabi court banquets. The marrow dissolves into the simmering meat stock before rice is added for final dum sealing.',
          ingredients: ['Mutton Shank (Nalli)', 'Bone Marrow Jus', 'Seeraga Samba Rice', 'Cloves & Mace', 'Pure Ghee'],
          allergens: ['Contains Dairy', 'Gluten Free', '100% Halal'],
          pairing: 'Served with Dalcha gravy and fresh mint raita.'
        },
        {
          id: 'dish-egg-dum',
          name: 'Karumbur Spiced Egg Biryani',
          tamil: 'கார முட்டை தம் பிரியாணி',
          category: 'Dum Biryani Specials',
          isVeg: false,
          isSignature: false,
          price: 190,
          portion: 'Regular (Serves 1)',
          spiceLevel: 2,
          image: 'images/egg-biryani.jpg',
          desc: 'Two farm eggs pan-crisped in biryani gravy spices, nested in rich firewood-simmered dum rice.',
          story: 'Golden scored eggs pan-roasted in clarified butter with Kashmiri chili powder, then slow-steamed with biryani rice so flavors permeate the yolks.',
          ingredients: ['Farm Fresh Eggs', 'Seeraga Samba Dum Rice', 'Caramelized Onions', 'Cumin & Coriander'],
          allergens: ['Contains Egg', 'Gluten Free'],
          pairing: 'Served with onion raita & spicy brinjal gravy.'
        },
        {
          id: 'dish-paneer-dum',
          name: 'Shahi Malai Paneer Dum Biryani',
          tamil: 'शाही பன்னீர் தம் பிரியாணி',
          category: 'Dum Biryani Specials',
          isVeg: true,
          isSignature: false,
          price: 230,
          portion: 'Regular (Serves 1-2)',
          spiceLevel: 1,
          image: 'images/paneer-biryani.jpg',
          desc: 'Fresh farm malai paneer and button mushrooms slow-steamed with saffron strands, whole spices, and mint.',
          story: 'Cooked in a dedicated vegetarian degh. Soft paneer cubes are marinated with hung curd, crushed royal cumin, and green herbs.',
          ingredients: ['Malai Paneer', 'Button Mushrooms', 'Aromatic Rice', 'Saffron', 'Pure Ghee', 'Fresh Mint'],
          allergens: ['Contains Dairy (Paneer/Ghee)', 'Vegetarian', 'Gluten Free'],
          pairing: 'Served with mixed vegetable raita and mild mirchi ka salan.'
        }
      ]
    },
    {
      id: 'cat-starters',
      categoryName: 'Starters & Tandoor',
      categorySubtitle: 'Charred, crisp, and wok-tossed appetizers infused with coastal pepper and Arcot spices',
      items: [
        {
          id: 'dish-mutton-sukka',
          name: 'Karumbur Mutton Pepper Sukka',
          tamil: 'கரும்பூர் மட்டன் சுக்கா வறுவல்',
          category: 'Starters & Tandoor',
          isVeg: false,
          isSignature: true,
          price: 320,
          portion: 'Platter (Serves 1-2)',
          spiceLevel: 3,
          image: 'images/mutton-sukka.jpg',
          desc: 'Tender baby mutton pieces pan-roasted dry in an iron skillet with crushed tellicherry peppercorns, shallots, and curry leaves.',
          story: 'A South Indian heritage staple. Cooked slowly in its own juices until the aromatic spice masala clings dark and glossy to every bite.',
          ingredients: ['Mutton Chops', 'Cracked Black Pepper', 'Small Shallots', 'Curry Leaves', 'Ginger-Garlic'],
          allergens: ['Gluten Free', 'Nut Free', '100% Halal'],
          pairing: 'Ideal starter before Dum Biryani, or paired with hot parottas.'
        },
        {
          id: 'dish-chicken-65',
          name: 'Arcot Heritage Chicken 65',
          tamil: 'ஆற்காடு சிக்கன் 65',
          category: 'Starters & Tandoor',
          isVeg: false,
          isSignature: true,
          price: 220,
          portion: 'Crispy Cut (Serves 1-2)',
          spiceLevel: 2,
          image: 'images/chicken-65.jpg',
          desc: 'Boneless chicken cubes crisp-fried with crushed garlic, roasted cumin, Kashmiri chili, and crackling curry leaves.',
          story: 'Authentic Madras recipe without synthetic red coloring. The bright color comes entirely from stone-ground Byadagi and Kashmiri chilies.',
          ingredients: ['Boneless Chicken', 'Curry Leaves', 'Crushed Garlic', 'Kashmiri Chili', 'Lemon Juice'],
          allergens: ['Gluten Free', 'Egg Used for Coating', '100% Halal'],
          pairing: 'Served with onion rings and fresh lemon wedge.'
        },
        {
          id: 'dish-prawn-roast',
          name: 'Coromandel Prawns Thokku Roast',
          tamil: 'காரைக்குடி இறால் தொக்கு வறுவல்',
          category: 'Starters & Tandoor',
          isVeg: false,
          isSignature: false,
          price: 380,
          portion: 'Catch of the Day (Serves 1-2)',
          spiceLevel: 3,
          image: 'images/prawn-roast.jpg',
          desc: 'Wild sea prawns tossed in thick tomato-shallot reduction, fennel powder, and coarse black pepper.',
          story: 'Freshly sourced coastal prawns flash-sautéed at high heat to retain delicate crunch and burst of marine sweetness.',
          ingredients: ['Bay of Bengal Prawns', 'Shallots', 'Country Tomatoes', 'Fennel Seeds', 'Pepper'],
          allergens: ['Shellfish / Crustacean', 'Gluten Free'],
          pairing: 'Pairs exceptionally well with Ghee Rice or Coin Parotta.'
        },
        {
          id: 'dish-paneer-ghee-roast',
          name: 'Ghee Roast Paneer Bites',
          tamil: 'நெய் ரோஸ்ட் பன்னீர்',
          category: 'Starters & Tandoor',
          isVeg: true,
          isSignature: false,
          price: 210,
          portion: 'Plate (Serves 1-2)',
          spiceLevel: 2,
          image: 'images/paneer-ghee-roast.jpg',
          desc: 'Fresh artisanal cottage cheese tossed in Kundapur-style slow-roasted red chili paste and pure golden ghee.',
          story: 'Whole dried red chilies and coriander seeds roasted in pure ghee and stone-ground into a velvety, fiery paste.',
          ingredients: ['Cottage Cheese (Paneer)', 'Pure Cow Ghee', 'Red Chili Paste', 'Curry Leaves', 'Tamarind'],
          allergens: ['Contains Dairy', 'Vegetarian', 'Gluten Free'],
          pairing: 'Served with mint chutney and pickled onions.'
        }
      ]
    },
    {
      id: 'cat-curries',
      categoryName: 'Curries & Dalcha',
      categorySubtitle: 'Rich slow-simmered gravies, traditional tamarind dalcha, and aromatic royal gravies',
      items: [
        {
          id: 'dish-dalcha-brinjal',
          name: 'Traditional Karumbur Dalcha',
          tamil: 'பாரம்பரிய கத்தரிக்காய் தால்சா',
          category: 'Curries & Dalcha',
          isVeg: true,
          isSignature: true,
          price: 120,
          portion: 'Bowl (Serves 1-2)',
          spiceLevel: 1,
          image: 'images/dalcha.jpg',
          desc: 'The soulmate of Karumbur biryani. Country brinjals and chana dal simmered with raw tamarind, mint, and woodfire broth.',
          story: 'Slow-simmered in deghs adjacent to biryani pots. Its pleasant sour and savory notes balance the richness of spiced ghee rice.',
          ingredients: ['Country Brinjal', 'Chana Dal', 'Tamarind Pulp', 'Mint Leaves', 'Cumin & Mustard'],
          allergens: ['Vegetarian', 'Gluten Free', 'Nut Free'],
          pairing: 'Essential accompaniment with Mutton or Chicken Dum Biryani.'
        },
        {
          id: 'dish-mutton-gravy',
          name: 'Chettinad Mutton Pepper Curry',
          tamil: 'செட்டிநாடு மட்டன் மிளகு கறி',
          category: 'Curries & Dalcha',
          isVeg: false,
          isSignature: false,
          price: 340,
          portion: 'Handi (Serves 1-2)',
          spiceLevel: 3,
          image: 'images/mutton-curry.jpg',
          desc: 'Robust roasted spice gravy with stone-flower (kalpasi), star anise, coarse black pepper, and tender mutton chunks.',
          story: 'Spices are dry-roasted on cast iron tawa until nutty, then ground fresh with grated coconut and shallots.',
          ingredients: ['Grass-fed Mutton', 'Stone Flower (Kalpasi)', 'Black Pepper', 'Coconut Milk', 'Shallots'],
          allergens: ['Gluten Free', 'Contains Coconut', '100% Halal'],
          pairing: 'Splendid with Bun Parotta or Malabar Coin Parotta.'
        },
        {
          id: 'dish-butter-chicken',
          name: 'Dilli Nawabi Butter Chicken',
          tamil: 'தில்லி நவாபி பட்டர் சிக்கன்',
          category: 'Curries & Dalcha',
          isVeg: false,
          isSignature: false,
          price: 270,
          portion: 'Handi (Serves 1-2)',
          spiceLevel: 1,
          image: 'images/butter-chicken.jpg',
          desc: 'Smoked tandoori chicken tikka simmered in silky makhani gravy with butter, cashews, and sun-dried fenugreek leaves.',
          story: 'Chicken thighs are roasted in clay tandoor until lightly charred, then finished in velvety sun-ripened tomato coulis.',
          ingredients: ['Tandoori Chicken', 'Cream & Butter', 'Cashew Paste', 'Kasturi Methi', 'Tomatoes'],
          allergens: ['Contains Dairy', 'Contains Tree Nuts (Cashew)', '100% Halal'],
          pairing: 'Pairs perfectly with Butter Naan or Garlic Kulcha.'
        }
      ]
    },
    {
      id: 'cat-breads',
      categoryName: 'Parottas & Breads',
      categorySubtitle: 'Golden flaky parottas, Madurai bun parottas, and clay tandoor baked breads',
      items: [
        {
          id: 'dish-coin-parotta',
          name: 'Malabar Coin Parotta (2 pcs)',
          tamil: 'மலபார் காயின் பரோட்டா',
          category: 'Parottas & Breads',
          isVeg: true,
          isSignature: true,
          price: 70,
          portion: '2 Pieces',
          spiceLevel: 0,
          image: 'images/coin-parotta.jpg',
          desc: 'Flaky, buttery, multi-layered flatbread crushed by hand while sizzling hot to fluff up layers.',
          story: 'Kneaded with cow milk and rested for 4 hours. Rolled into spiral discs and toasted golden on cast iron flat griddles.',
          ingredients: ['Refined Flour', 'Pure Ghee', 'Fresh Milk', 'Sea Salt'],
          allergens: ['Contains Wheat / Gluten', 'Contains Dairy'],
          pairing: 'Dip into hot Mutton Sukka or Dalcha gravy.'
        },
        {
          id: 'dish-bun-parotta',
          name: 'Madurai Bun Parotta (2 pcs)',
          tamil: 'மதுரை பன் பரோட்டா',
          category: 'Parottas & Breads',
          isVeg: true,
          isSignature: false,
          price: 90,
          portion: '2 Pieces',
          spiceLevel: 0,
          image: 'images/bun-parotta.jpg',
          desc: 'Crispy round pillow of buttery layers, golden crunchy outside with soft airy bread inside.',
          story: 'Famous southern street legend. The dough is folded dozens of times and shallow-fried in clarified butter.',
          ingredients: ['Flour', 'Butter', 'Semolina', 'Sugar & Salt'],
          allergens: ['Contains Wheat / Gluten', 'Contains Dairy'],
          pairing: 'Best enjoyed crushed with thick Chettinad Pepper Curry.'
        },
        {
          id: 'dish-butter-naan',
          name: 'Tandoori Butter Naan',
          tamil: 'தந்தூரி பட்டர் நான்',
          category: 'Parottas & Breads',
          isVeg: true,
          isSignature: false,
          price: 60,
          portion: '1 Large Naan (Cut in 2)',
          spiceLevel: 0,
          image: 'images/butter-naan.jpg',
          desc: 'Classic clay-oven flatbread charred over open coal tandoor, brushed with warm farmhouse butter.',
          story: 'Baked by slapping onto 400°C clay tandoor walls, acquiring signature blistering and pillowy softness.',
          ingredients: ['Flour', 'Yogurt', 'Baking Butter', 'Nigella Seeds'],
          allergens: ['Contains Wheat / Gluten', 'Contains Dairy'],
          pairing: 'Accompanies our rich curries and gravies.'
        }
      ]
    },
    {
      id: 'cat-desserts',
      categoryName: 'Mithai & Desserts',
      categorySubtitle: 'Traditional royal South Indian sweets, tender coconut payasam, and slow-churned kulfi',
      items: [
        {
          id: 'dish-elaneer-payasam',
          name: 'Chilled Elaneer Payasam',
          tamil: 'குளிர்ந்த இளநீர் பாயாசம்',
          category: 'Mithai & Desserts',
          isVeg: true,
          isSignature: true,
          price: 130,
          portion: 'Glass (Serves 1)',
          spiceLevel: 0,
          image: 'images/elaneer-payasam.jpg',
          desc: 'Refreshing sweet delight made with tender coconut water, tender coconut jelly pulp, condensed milk, and cardamom.',
          story: 'Made from hand-picked Pollachi tender coconuts. The tender meat is blended with reduced milk and chilled to soothe the palate after biryani.',
          ingredients: ['Tender Coconut Pulp & Water', 'Reduced Milk', 'Cardamom', 'Kewra Essence'],
          allergens: ['Contains Dairy', 'Gluten Free', 'Vegetarian'],
          pairing: 'The ideal sweet finale after a hearty Karumbur biryani meal.'
        },
        {
          id: 'dish-shahi-tukda',
          name: 'Royal Arcot Shahi Tukda',
          tamil: 'ராயல் ஷாஹி துக்டா',
          category: 'Mithai & Desserts',
          isVeg: true,
          isSignature: false,
          price: 120,
          portion: '2 Portions',
          spiceLevel: 0,
          image: 'images/shahi-tukda.jpg',
          desc: 'Crisp ghee-fried bread triangles soaked in saffron sugar syrup, blanketed in thick almond-pistachio rabri.',
          story: 'A classic Nawabi dessert served at royal Tamil banquets. Fragrant with green cardamom, silver leaf, and rose water.',
          ingredients: ['Bread', 'A2 Ghee', 'Reduced Rabri Milk', 'Pistachio', 'Almonds', 'Saffron'],
          allergens: ['Contains Wheat / Gluten', 'Contains Dairy', 'Contains Tree Nuts'],
          pairing: 'Best served warm alongside chilled kulfi.'
        },
        {
          id: 'dish-matka-kulfi',
          name: 'Earthen Pot Malai Kulfi',
          tamil: 'மட்கா மலாய் குல்பி',
          category: 'Mithai & Desserts',
          isVeg: true,
          isSignature: false,
          price: 110,
          portion: '1 Clay Matka',
          spiceLevel: 0,
          image: 'images/matka-kulfi.jpg',
          desc: 'Traditional slow-condensed buffalo milk kulfi set in porous clay pot with crushed pistachios and saffron.',
          story: 'Simmered in huge open pans for 5 hours until caramelized, then frozen naturally inside earthen vessels.',
          ingredients: ['Whole Milk', 'Pistachios', 'Cardamom Powder', 'Cane Sugar', 'Saffron'],
          allergens: ['Contains Dairy', 'Contains Tree Nuts', 'Vegetarian'],
          pairing: 'Rich, dense, and authentic dessert.'
        }
      ]
    },
    {
      id: 'cat-beverages',
      categoryName: 'Traditional Refreshers',
      categorySubtitle: 'Digestive herb coolers, floral essences, and brass-dabara filter coffee',
      items: [
        {
          id: 'dish-nannari',
          name: 'Nannari Sharbath with Basil Seeds',
          tamil: 'நன்னாரி சர்பத் (சப்ஜா விதை)',
          category: 'Traditional Refreshers',
          isVeg: true,
          isSignature: true,
          price: 70,
          portion: 'Tall Glass (300ml)',
          spiceLevel: 0,
          image: 'images/nannari-sharbath.jpg',
          desc: 'Cooling wild sarsaparilla root extract infused with fresh lime juice, crushed ice, and blooming sabja seeds.',
          story: 'Traditional Tamil Ayurvedic remedy known for natural cooling properties and aiding digestion after heavy feasts.',
          ingredients: ['Nannari Root Syrup', 'Fresh Lime Juice', 'Basil (Sabja) Seeds', 'Spring Water'],
          allergens: ['Vegan', 'Gluten Free', 'Nut Free'],
          pairing: 'Sip before or during biryani meal.'
        },
        {
          id: 'dish-rose-milk',
          name: 'Heritage Chilled Rose Milk',
          tamil: 'பாரம்பரிய ரோஸ் மில்க்',
          category: 'Traditional Refreshers',
          isVeg: true,
          isSignature: false,
          price: 70,
          portion: 'Glass (300ml)',
          spiceLevel: 0,
          image: 'images/rose-milk.jpg',
          desc: 'Cold sweetened milk infused with pure Damascus rose essence and crushed ice.',
          story: 'Made the authentic cinema-theatre style of Tamil Nadu, soothing and fragrant.',
          ingredients: ['Pasteurized Whole Milk', 'Rose Petal Essence', 'Cane Sugar'],
          allergens: ['Contains Dairy', 'Vegetarian', 'Gluten Free'],
          pairing: 'Popular dessert drink combination.'
        },
        {
          id: 'dish-degree-coffee',
          name: 'Kumbakonam Degree Filter Coffee',
          tamil: 'கும்பகோணம் டிகிரி காபி',
          category: 'Traditional Refreshers',
          isVeg: true,
          isSignature: false,
          price: 50,
          portion: 'Served in Brass Dabara',
          spiceLevel: 0,
          image: 'images/degree-coffee.jpg',
          desc: 'First-decoction dark chicory blend brewed in traditional drip filter, frothy with thick buffalo milk.',
          story: 'Poured back and forth between traditional brass dabara and tumbler from arm\'s length to create aromatic frothy crema.',
          ingredients: ['80:20 Plantation AA Coffee & Chicory', 'Boiled Pure Milk', 'Sugar'],
          allergens: ['Contains Dairy', 'Vegetarian', 'Gluten Free'],
          pairing: 'A comforting finish to any authentic meal.'
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
            <h2 class="category-title">${escapeHTML(cat.categoryName)}</h2>
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
          <p class="empty-desc">No items match your search "${escapeHTML(searchQuery || activeFilter)}". Try clearing filters or searching for mutton, biryani, chicken, or dalcha.</p>
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
      ? `<span class="signature-chip">★ Chef's Special</span>` 
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
            <span class="portion-tag">${dish.portion.split(' ')[0]}</span>
          </div>
          ${spiceHtml}
        </div>
      </div>

      <div class="card-media-col">
        <img 
          src="${escapeHTML(dish.image)}" 
          alt="${escapeHTML(dish.name)}" 
          class="card-food-img" 
          loading="eager"
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

  // --- SCROLLSPY & SMOOTH CATEGORY NAVIGATION ---
  let observer = null;

  function setupScrollSpy() {
    if (observer) {
      observer.disconnect();
    }

    const categorySections = document.querySelectorAll('.category-block');
    if (categorySections.length === 0) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          highlightCategoryTab(sectionId);
        }
      });
    }, {
      root: null,
      rootMargin: '-130px 0px -60% 0px',
      threshold: 0
    });

    categorySections.forEach(section => observer.observe(section));
  }

  function highlightCategoryTab(targetId) {
    categoryTabs.forEach(tab => {
      const isCurrent = tab.getAttribute('href') === `#${targetId}`;
      tab.classList.toggle('active', isCurrent);
      if (isCurrent) {
        // Smoothly scroll the tab into view in the horizontal nav track
        tab.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    });
  }

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Calculate offset position for sticky nav
        const navOffset = 135;
        const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
        const targetPos = targetSection.getBoundingClientRect().top + currentScroll - navOffset;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });

        highlightCategoryTab(targetId);
      }
    });
  });

  // --- HORIZONTAL TRACK SCROLL ENHANCEMENTS (MOUSE DRAG & WHEEL) ---
  function enhanceHorizontalScroll(elem) {
    if (!elem) return;

    // Mouse wheel horizontal scroll (desktop mouse users)
    elem.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        elem.scrollLeft += e.deltaY;
      }
    }, { passive: false });

    // Drag-to-scroll with mouse
    let isDown = false;
    let startX = 0;
    let scrollLeftPos = 0;

    elem.addEventListener('mousedown', (e) => {
      isDown = true;
      elem.classList.add('dragging');
      startX = e.pageX - elem.offsetLeft;
      scrollLeftPos = elem.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        elem.classList.remove('dragging');
      }
    });

    elem.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - elem.offsetLeft;
      const walk = (x - startX) * 1.5;
      elem.scrollLeft = scrollLeftPos - walk;
    });
  }

  const categoryNavTrack = document.getElementById('categoryNavTrack');
  const filterPillsRow = document.querySelector('.filter-pills-row');
  enhanceHorizontalScroll(categoryNavTrack);
  enhanceHorizontalScroll(filterPillsRow);

  // --- FLOATING BACK TO TOP BUTTON ---
  const floatingTopBtn = document.getElementById('floatingTopBtn');
  if (floatingTopBtn) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      if (scrollY > 300) {
        floatingTopBtn.classList.add('visible');
      } else {
        floatingTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    floatingTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- UTILITY ---
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- INITIALIZE ON DOM READY ---
  renderMenu();

})();
