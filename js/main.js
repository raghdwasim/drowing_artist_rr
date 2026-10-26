
/* =========================================================
   DRAWING ARTIST R
   Main JavaScript
   Gallery + Artwork Details + Commission + Contact
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ARTWORK DATABASE
    ===================================================== */

    const artworksDatabase = {

        1: {
            id: 1,
            title: "Eight of Fate",
            image: "imgs/bmw.jpeg",
            medium: "Acrylic",
            mediumAr: "أكريليك",
            size: "20 × 30 cm",
            price: 700,
            priceLabel: "EGP700",
            description:
                "A striking acrylic composition featuring a stylized car brand emblem alongside the iconic number 8 billiard ball. It tells a story of calculated risk, speed, and the defining moments where fate and final choices collide on life's table."
        },

        2: {
            id: 2,
            title: "Where Silence Meets the Sea",
            image: "imgs/sea canv.jpeg",
            medium: "Acrylic",
            mediumAr: "أكريليك",
             size: "20 × 30 cm",
            price: 900,
            priceLabel: "EGP900",
            description:
                "A textured artwork capturing foamy blue ocean waves crashing gently against a warm sandy shore. It embodies a narrative of inner peace, solitude, and the quiet escape one finds when listening to the rhythmic whispers of the sea."
        },

        3: {
            id: 3,
            title: "A Love Beyond Forever",
            image: "imgs/tow bakk.jpeg",
            medium: "Acrylic",
            mediumAr: "أكريليك",
            size: "20 × 30 cm",
            price: 1500,
            priceLabel: "EGP1,500",
            description:
                "An elegant and tender painting depicting two graceful white swans leaning toward each other in quiet harmony, naturally forming the shape of a heart. It captures a story of eternal devotion, loyalty, and a spiritual bond that transcends time."
        },

        4: {
            id: 4,
            title: "The Past Killed Tomorrow",
            image: "imgs/3.jpeg",
            medium: "Graphite / Pencil + Red Watercolor",
            mediumAr: "رصاص + لون أحمر مائي",
            size: "25 × 35 cm",
            price: 2000,
            priceLabel: "EGP2,000 (Set of 3)",
            set: true,
            description:
                "A hand holding a weapon aimed toward destruction, capturing those grim moments when a person inadvertently destroys their own future."
        },

        5: {
            id: 5,
            title: "The Past Killed Tomorrow",
            image: "imgs/2.jpeg",
            medium: "Graphite / Pencil + Red Watercolor",
            mediumAr: "رصاص + لون أحمر مائي",
            size: "25 × 35 cm",
            price: 2000,
            priceLabel: "EGP2,000 (Set of 3)",
            set: true,
            description:
                "Part of a three-piece artwork set combining pencil work with expressive red watercolor accents."
        },

        6: {
            id: 6,
            title: "The Past Killed Tomorrow",
            image: "imgs/1.jpeg",
            medium: "Graphite / Pencil + Red Watercolor",
            mediumAr: "رصاص + لون أحمر مائي",
            size: "25 × 35 cm",
            price: 2000,
            priceLabel: "EGP2,000 (Set of 3)",
            set: true,
            description:
                "An abstract piece featuring splashes of red, symbolizing the bleeding of memory and the painful collision between a traumatic past and the hope for tomorrow."
        },

        7: {
            id: 7,
            title: "A Body of Colors",
            image: "imgs/bikini.jpeg",
            medium: "Watercolor",
            mediumAr: "ألوان مائية",
            size: "35 × 50 cm",
            price: 800,
            priceLabel: "EGP800",
            description:
                "Fluid, vibrant watercolor female forms expressing the multiplicity of identity and the smooth flow of positive energy."
        },

        8: {
            id: 8,
            title: "WOMAN: Beyond the Body",
            image: "imgs/women coler.jpeg",
            medium: "Watercolor",
            mediumAr: "ألوان مائية",
            size: "35 × 50 cm",
            price: 700,
            priceLabel: "EGP700",
            description:
                "An expressive focus on the body and soul transcending outward appearances, highlighting inner strength and confident femininity."
        },

        9: {
            id: 9,
            title: "The Shape of Her",
            image: "imgs/body women.jpeg",
            medium: "Watercolor",
            mediumAr: "ألوان مائية",
            size: "35 × 50 cm",
            price: 700,
            priceLabel: "EGP700",
            description:
                "Warm earth-toned and golden curves reflecting the softness, warmth of human nature, and inner harmony."
        },

        10: {
            id: 10,
            title: "The Devil Beneath Her Skin",
            image: "imgs/evil women.jpeg",
            medium: "Charcoal",
            mediumAr: "فحم",
            size: "25 × 35 cm",
            price: 800,
            priceLabel: "EGP800",
            description:
                "A dark-featured demonic visage emerging from beneath a facade of innocence, depicting the eternal struggle between light and darkness within the human psyche."
        },

        11: {
            id: 11,
            title: "The Beast Within",
            image: "imgs/die and woif women.jpeg",
            medium: "Graphite / Pencil",
            mediumAr: "رصاص",
            size: "25 × 35 cm",
            price: 900,
            priceLabel: "EGP900",
            description:
                "A figure wrestling with an inner beast emerging from the depths, symbolizing the constant control over primal instincts and the darker side."
        },

        12: {
            id: 12,
            title: "She Walks Among Gods",
            image: "imgs/power women.jpeg",
            medium: "Graphite / Pencil",
            mediumAr: "رصاص",
            size: "25 × 35 cm",
            price: 800,
            priceLabel: "EGP800",
            description:
                "A towering, empowered figure with wings and instruments of strength, conveying pride and transcendence above mortal struggles."
        },

        13: {
            id: 13,
            title: "Grief in Slow Motion",
            image: "imgs/regret women.jpeg",
            medium: "Graphite / Pencil",
            mediumAr: "رصاص",
            size: "35 × 50 cm",
            price: 1200,
            priceLabel: "EGP1,200",
            description:
                "A woman covering her face with a melting, wax-like texture—a visual metaphor for heavy grief that slowly seeps in and overwhelms the spirit."
        },

        14: {
            id: 14,
            title: "Even Giants Weep",
            image: "imgs/elph.jpeg",
            medium: "Graphite / Pencil",
            mediumAr: "رصاص",
            size: "25 × 35 cm",
            price: 1000,
            priceLabel: "EGP1,000",
            description:
                "Majestic elephants shedding sorrowful tears, symbolizing how even the strongest and most resilient forces can break and weep in moments of defeat."
        },

        15: {
            id: 15,
            title: "A Smile Above the Ruins",
            image: "imgs/sad smile.jpeg",
            medium: "Charcoal + Graphite / Pencil",
            mediumAr: "فحم + رصاص",
            size: "25 × 35 cm",
            price: 900,
            priceLabel: "EGP900",
            description:
                "A smiling face framed amidst rising smoke and rubble, embodying resilient hope standing firm against psychological devastation."
        },

        16: {
            id: 16,
            title: "The Faces of Unspoken Pain",
            image: "imgs/sad womens.jpeg",
            medium: " Graphite / Pencil",
            mediumAr: "رصاص",
            size: "35 × 50 cm",
            price: 800,
            priceLabel: "EGP800",
            description:
                "Interlocking faces capturing the multi-layered depth of unspoken agony that is felt deeply rather than voiced."
        },

        17: {
            id: 17,
            title: " The Anatomy of Anger",
            image: "imgs/women  narvos.jpeg",
            medium: " Graphite / Pencil",
            mediumAr: "رصاص",
            size: "25 × 35 cm",
            price: 1100,
            priceLabel: "EGP1,100",
            description:
                "A half-human face parting to reveal a screaming skull, illustrating how unbridled anger devours the interior and shatters inner peace."
        },

        18: {
            id: 18,
            title: " Between Venom and Instinct",
            image: "imgs/snack woif scar.jpeg",
            medium: " Graphite / Pencil",
            mediumAr: "رصاص",
            size: "25 × 35 cm",
            price: 1000,
            priceLabel: "EGP1,000",
            description:
                "Fierce wolves and a snake intertwined, representing the raw collision between primal instincts and the toxic elements surrounding us."
        },

        19: {
            id: 19,
            title: "Love Without Sight",
            image: "imgs/red love.jpeg",
            medium: "Graphite / Pencil + Watercolor",
            mediumAr: "رصاص + لون مائي",
            size: "25 × 35 cm",
            price: 900,
            priceLabel: "EGP900",
            description:
                "Two blindfolded figures cautiously feeling their way toward one another, representing blind devotion and complete surrender to the heart without conditions."
        },

        20: {
            id: 20,
            title: "The Little World We Made",
            image: "imgs/batrek coler.jpeg",
            medium: " Watercolor",
            mediumAr: " لون مائي",
            size: "25 × 35 cm",
            price: 800,
            priceLabel: "EGP800",
            description:
                "Penguins cradling their little ones with warm affection, telling a story of the intimate safety we build for ourselves in a cold world."
        },

        21: {
            id: 21,
            title: "Back to Back, Soul to Soul",
            image: "imgs/love colrt blk.jpeg",
            medium: "Watercolor",
            mediumAr: "ألوان مائية",
            size: "40 × 60 cm",
            price: 700,
            priceLabel: "EGP700",
            description:
                "Harmonious, opposing silhouettes rendered in deep watercolor tones, expressing profound spiritual connection and silent understanding."
        },

        22: {
            id: 22,
            title: "Van Gogh",
            image: "imgs/van go.jpeg",
            medium: "Watercolor + Color",
            mediumAr: "ألوان مائية + ألوان",
            size: "25 × 35 cm",
            price: 1200,
            priceLabel: "EGP1,200 (Set of 3)",
            set: true,
            description:
                "Part of a three-piece watercolor and color collection."
        },

        23: {
            id: 23,
            title: "Mona Lisa",
            image: "imgs/monaliza.jpeg",
            medium: "Watercolor + Color",
            mediumAr: "ألوان مائية + ألوان",
            size: "25 × 35 cm",
            price: 1200,
            priceLabel: "EGP1,200 (Set of 3)",
            set: true,
            description:
                "Part of a three-piece watercolor and color collection."
        },

        24: {
            id: 24,
            title: "The Girl with a Pearl Earring",
            image: "imgs/women van.jpeg",
            medium: "Watercolor + Color",
            mediumAr: "ألوان مائية + ألوان",
            size: "25 × 35 cm",
            price: 1200,
            priceLabel: "EGP1,200 (Set of 3)",
            set: true,
            description:
                "Part of a three-piece watercolor and color collection."
        },


        25: {
            id: 25,
            title: "Where Fire Kisses Ice",
            image: "imgs/cold.jpeg",
            medium: "Acrylic",
            mediumAr: "أكريليك",
            size: "30 × 40 cm",
            price: 1500,
            priceLabel: "EGP1,500",
            description:
                "Vibrant, contrasting color gradients blending the chilling cold of ice with the burning intensity of fire to translate conflicting human emotions."
        },

        26: {
            id: 26,
            title: "Her Untold Story",
            image: "imgs/bodycc.jpg",
            medium: "Acrylic",
            mediumAr: "أكريليك",
            size: "25 × 35 cm",
            price: 900,
            priceLabel: "EGP900",
            description:
                "Mysterious blue and purple curves whispering secrets and hidden dimensions that have yet to be shared with the world."
        },

        27: {
            id: 27,
            title: "The Art of Almost",
            image: "imgs/tow lips.jpeg",
            medium: "Watercolor",
            mediumAr: "ألوان مائية",
            size: "35 × 50 cm",
            price: 900,
            priceLabel: "EGP900",
            description:
                "Fragmented and torn lips and mouth features, expressing the bittersweet ache of incomplete hopes and things that almost were."
        },

         28: {
            id: 28,
            title: "Love That Kills Innocence",
            image: "imgs/141414.jpg",
              medium: "Graphite / Pencil",
            mediumAr: "رصاص",
            size: "25 × 35 cm",
            price: 900,
            priceLabel: "EGP 600",
            description:
                "A composition split between light and dark, angels and demons, illustrating relationships that quietly drain the heart's pure innocence."
        },

         29: {
            id: 29,
            title: "Piercing Insight",
            image: "imgs/151515.jpg",
            medium: "Graphite / Pencil",
            mediumAr: "رصاص",
            size: "25 × 35 cm",
            price: 900,
            priceLabel: "EGP 700",
            description:
                "A sword piercing straight through the head and skull, symbolizing the shocking sting of harsh awareness and realization of painful truths."
        },

         30: {
            id: 30,
            title: "Fragile Veil",
            image: "imgs/3333.jpg",
              medium: "Graphite / Pencil",
            mediumAr: "رصاص",
            
            size: "35 × 50 cm",
            price: 900,
            priceLabel: "EGP 900",
            description:
                "A face approached by splinter-like drops of blood and a pierced eye, capturing the raw vulnerability of the soul facing sudden emotional shocks."
        },

        
         31: {
            id: 31,
            title: "Labyrinth of Visions",
            image: "imgs/eyes women.jpeg",
              medium: "Graphite / Pencil",
            mediumAr: "رصاص",
            
            size: "25 × 35 cm",
            price: 900,
            priceLabel: "EGP 400",
            description:
                "A face overlaid with multiple watching eyes gazing in all directions, portraying hyper-awareness, over-perception, and perpetual internal observation."
        },

        
         32: {
            id: 32,
            title: "Depressed",
            image: "imgs/999.jpg",
              medium: "Graphite / Pencil",
            mediumAr: "رصاص",
            
            size: "25 × 35 cm",
            price: 900,
            priceLabel: "EGP 500",
            description:
                "Distorted, elongated faces submerged beneath stark red typography, manifesting the suffocating sense of lost identity during deep depression."
        },

        
         33: {
            id: 33,
            title: "Flight of Memory",
            image: "imgs/1010101.jpg",
              medium: "Graphite / Pencil",
            mediumAr: "رصاص",
            
            size: "25 × 35 cm",
            price: 900,
            priceLabel: "EGP 400",
            description:
                "A skull pierced by a feather, arrows, and soaring birds, symbolizing the ultimate liberation of thoughts and memories after parting or pain."
        },


    };

    /* =====================================================
       MAKE DATABASE AVAILABLE GLOBALLY
    ===================================================== */

    window.artworksDatabase = artworksDatabase;


    /* =====================================================
       THEME
       CSS uses: [data-theme="light"]
    ===================================================== */

    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            const currentTheme =
                document.documentElement.getAttribute("data-theme");

            if (currentTheme === "light") {

                document.documentElement.removeAttribute("data-theme");
                localStorage.setItem("theme", "dark");

            } else {

                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
            }
        });
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menu-toggle") ||
        document.querySelector(".menu-toggle");

    const navMenu =
        document.getElementById("mobile-menu") ||
        document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });
    }


    /* =====================================================
       GALLERY
       Update existing artwork cards from database
    ===================================================== */

    const artworkCards =
        document.querySelectorAll(".artwork-card");

    artworkCards.forEach((card, index) => {

        const artworkId =
            parseInt(card.dataset.id) ||
            parseInt(card.getAttribute("data-artwork-id")) ||
            index + 1;

        const artwork =
            artworksDatabase[artworkId];

        if (!artwork) return;


        /* Image */

        const image =
            card.querySelector("img");

        if (image) {

            image.src = artwork.image;
            image.alt = artwork.title;

        }


        /* Badge */

        const badge =
            card.querySelector(".art-badge");

        if (badge) {

            badge.textContent =
                artwork.medium;

        }


        /* Title */

        const title =
            card.querySelector(".artwork-title, h3, h2");

        if (title) {

            title.textContent =
                artwork.title;

        }


        /* Medium / first spec */

        const specs =
            card.querySelectorAll(".spec-value");

        if (specs.length >= 1) {

            specs[0].textContent =
                artwork.medium;

        }

        /* Size / second spec */

        if (specs.length >= 2) {

            specs[1].textContent =
                artwork.size;

        }



        /* Artwork link */

        const links =
            card.querySelectorAll("a");

        links.forEach(link => {

            const href =
                link.getAttribute("href");

            if (
                href &&
                (
                    href.includes("artwork.html") ||
                    href === "#"
                )
            ) {

                link.href =
                    `artwork.html?id=${artwork.id}`;

            }
        });
    });


    /* =====================================================
       GALLERY FILTERS
       Acrylic / Graphite / Watercolor / Charcoal
    ===================================================== */

    const filterContainer =
        document.querySelector(".filter-buttons, .filters");

    if (filterContainer) {

        filterContainer.innerHTML = `
            <button class="filter-btn active" data-filter="all">
                All Masterpieces
            </button>

            <button class="filter-btn" data-filter="Acrylic">
                Acrylic
            </button>

            <button class="filter-btn" data-filter="Graphite">
                Graphite / Pencil
            </button>

            <button class="filter-btn" data-filter="Watercolor">
                Watercolor
            </button>

            <button class="filter-btn" data-filter="Charcoal">
                Charcoal
            </button>
        `;
    }


    const filterButtons =
        document.querySelectorAll(".filter-btn");


    if (filterButtons.length && artworkCards.length) {

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                filterButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");

                const filter =
                    button.dataset.filter || "all";

                artworkCards.forEach((card, index) => {

                    const artworkId =
                        parseInt(card.dataset.id) ||
                        parseInt(card.getAttribute("data-artwork-id")) ||
                        index + 1;

                    const artwork =
                        artworksDatabase[artworkId];

                    if (!artwork) return;

                    const medium =
                        artwork.medium.toLowerCase();

                    if (filter === "all") {

                        card.style.display = "";

                        return;
                    }


                    if (filter === "Acrylic") {

                        card.style.display =
                            medium.includes("acrylic")
                                ? ""
                                : "none";

                        return;
                    }


                    if (filter === "Graphite") {

                        card.style.display =
                            medium.includes("graphite") ||
                            medium.includes("pencil")
                                ? ""
                                : "none";

                        return;
                    }


                    if (filter === "Watercolor") {

                        card.style.display =
                            medium.includes("watercolor")
                                ? ""
                                : "none";

                        return;
                    }


                    if (filter === "Charcoal") {

                        card.style.display =
                            medium.includes("charcoal")
                                ? ""
                                : "none";

                        return;
                    }

                });
            });
        });
    }


    /* =====================================================
       ARTWORK DETAILS PAGE
    ===================================================== */

    const dynamicImage =
        document.getElementById("dynamic-art-img");

    if (dynamicImage) {

        const params =
            new URLSearchParams(window.location.search);

        const artworkId =
            parseInt(params.get("id")) || 1;

        const artwork =
            artworksDatabase[artworkId];


        if (artwork) {

            const title =
                document.getElementById("dynamic-art-title");

            const badge =
                document.getElementById("dynamic-art-badge");

            const description =
                document.getElementById("dynamic-art-desc");

            const medium =
                document.getElementById("dynamic-art-medium");

            const size =
                document.getElementById("dynamic-art-size");

            const price =
                document.getElementById("dynamic-art-price");

            const requestButton =
                document.getElementById("request-artwork-btn");


            dynamicImage.src =
                artwork.image;

            dynamicImage.alt =
                artwork.title;


            if (title) {
                title.textContent =
                    artwork.title;
            }


            if (badge) {
                badge.textContent =
                    artwork.medium;
            }


            if (description) {
                description.textContent =
                    artwork.description;
            }


            if (medium) {
                medium.textContent =
                    artwork.medium;
            }


            if (size) {
                size.textContent =
                    artwork.size;
            }


            if (price) {
                price.textContent =
                    artwork.priceLabel;
            }


            if (requestButton) {

                requestButton.href =
                    `commission.html?id=${artwork.id}`;

                requestButton.textContent =
                    "Request This Artwork";
            }

        } else {

            dynamicImage.src =
                "imgs/bmw.jpeg";

            dynamicImage.alt =
                "Artwork Not Found";


            const title =
                document.getElementById("dynamic-art-title");

            if (title) {

                title.textContent =
                    "Artwork Not Found";
            }
        }
    }


    /* =====================================================
       COMMISSION PAGE
    ===================================================== */

    const commissionForm =
        document.getElementById("commissionForm");

    if (commissionForm) {

        const params =
            new URLSearchParams(window.location.search);

        const artworkId =
            parseInt(params.get("id"));

        const artwork =
            artworksDatabase[artworkId];


        const selectedCard =
            document.getElementById("selected-artwork-card");

        const selectedImage =
            document.getElementById("selected-artwork-image");

        const selectedBadge =
            document.getElementById("selected-artwork-badge");

        const selectedTitle =
            document.getElementById("selected-artwork-title");

        const selectedMedium =
            document.getElementById("selected-artwork-medium");

        const selectedSize =
            document.getElementById("selected-artwork-size");

        const selectedPrice =
            document.getElementById("selected-artwork-price");


        const hiddenId =
            document.getElementById("artwork_id");

        const hiddenTitle =
            document.getElementById("artwork_title");

        const hiddenMedium =
            document.getElementById("artwork_medium");

        const hiddenSize =
            document.getElementById("artwork_size");

        const hiddenPrice =
            document.getElementById("artwork_price");


        if (artwork) {

            /* Show selected artwork card */

            if (selectedCard) {

                selectedCard.style.display =
                    "block";
            }


            if (selectedImage) {

                selectedImage.src =
                    artwork.image;

                selectedImage.alt =
                    artwork.title;
            }


            if (selectedBadge) {

                selectedBadge.textContent =
                    artwork.medium;
            }


            if (selectedTitle) {

                selectedTitle.textContent =
                    artwork.title;
            }


            if (selectedMedium) {

                selectedMedium.textContent =
                    artwork.medium;
            }


            if (selectedSize) {

                selectedSize.textContent =
                    artwork.size;
            }


            if (selectedPrice) {

                selectedPrice.textContent =
                    artwork.priceLabel;
            }


            /* Hidden fields */

            if (hiddenId) {
                hiddenId.value =
                    artwork.id;
            }

            if (hiddenTitle) {
                hiddenTitle.value =
                    artwork.title;
            }

            if (hiddenMedium) {
                hiddenMedium.value =
                    artwork.medium;
            }

            if (hiddenSize) {
                hiddenSize.value =
                    artwork.size;
            }

            if (hiddenPrice) {
                hiddenPrice.value =
                    artwork.priceLabel;
            }

        } else {

            /* No artwork selected */

            if (selectedCard) {

                selectedCard.style.display =
                    "block";
            }


            if (selectedTitle) {

                selectedTitle.textContent =
                    "Custom Artwork Request";
            }


            if (selectedMedium) {

                selectedMedium.textContent =
                    "Custom Request";
            }


            if (selectedSize) {

                selectedSize.textContent =
                    "To be discussed";
            }


            if (selectedPrice) {

                selectedPrice.textContent =
                    "Custom Quote";
            }
        }
    }


    /* =====================================================
       CONTACT PAGE
       Egypt Governorates
    ===================================================== */

    const countrySelect =
        document.getElementById("country-select");

    const governorateWrapper =
        document.getElementById("governorate-wrapper");

    const governorateSelect =
        document.getElementById("governorate-select");


    const egyptGovernorates = [
        "Cairo",
        "Giza",
        "Alexandria",
        "Qalyubia",
        "Port Said",
        "Suez",
        "Damietta",
        "Dakahlia",
        "Sharqia",
        "Gharbia",
        "Monufia",
        "Beheira",
        "Kafr El Sheikh",
        "Fayoum",
        "Beni Suef",
        "Minya",
        "Assiut",
        "Sohag",
        "Qena",
        "Luxor",
        "Aswan",
        "Red Sea",
        "New Valley",
        "Matrouh",
        "North Sinai",
        "South Sinai",
        "Ismailia"
    ];


    if (
        countrySelect &&
        governorateWrapper &&
        governorateSelect
    ) {

        countrySelect.addEventListener("change", () => {

            if (countrySelect.value === "Egypt") {

                governorateWrapper.style.display =
                    "block";

                governorateSelect.required =
                    true;

                governorateSelect.innerHTML = `
                    <option value="">
                        -- Select Governorate --
                    </option>

                    ${egyptGovernorates
                        .map(
                            governorate =>
                                `<option value="${governorate}">
                                    ${governorate}
                                </option>`
                        )
                        .join("")}
                `;

            } else {

                governorateWrapper.style.display =
                    "none";

                governorateSelect.required =
                    false;

                governorateSelect.value =
                    "";

                governorateSelect.innerHTML = `
                    <option value="">
                        -- Select Governorate --
                    </option>
                `;
            }
        });
    }


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        if (!question) return;


        question.addEventListener("click", () => {

            const isOpen =
                item.classList.contains("active");


            faqItems.forEach(otherItem => {

                otherItem.classList.remove("active");

            });


            if (!isOpen) {

                item.classList.add("active");

            }
        });
    });

});



/* =========================================================
   COMMISSION / CONTACT ROUTING — WHATSAPP ONLY
========================================================= */

function processStudioRouting(event, formId, responseId) {

    event.preventDefault();

    const form = document.getElementById(formId);
    const response = document.getElementById(responseId);

    if (!form) return;

    const formData = new FormData(form);

    // WhatsApp is the only communication method
    const communication = "WhatsApp";

    // Continue building your message below this line


    /* =====================================================
       ARTWORK INFORMATION
    ===================================================== */

    const artworkId =
        formData.get("artwork_id");

    const artworkTitle =
        formData.get("artwork_title");

    const artworkPrice =
        formData.get("artwork_price");

    const artworkMedium =
        formData.get("artwork_medium");

    const artworkSize =
        formData.get("artwork_size");


    /* =====================================================
       DETECT CONTACT VS COMMISSION
    ===================================================== */

    const isCommission =
        formId === "commissionForm";


    /* =====================================================
       BUILD MESSAGE
    ===================================================== */

    let message = `
🎨 DRAWING ARTIST R
${isCommission
    ? "Commission Request"
    : "Contact Request"}

━━━━━━━━━━━━━━━━━━
`;


    if (isCommission) {

        message += `
Selected Artwork:

Title:
${artworkTitle || "Custom Artwork"}

Artwork ID:
${artworkId || "N/A"}

Price:
${artworkPrice || "Custom Quote"}

Original Medium:
${artworkMedium || "Not specified"}

Size:
${artworkSize || "Not specified"}

━━━━━━━━━━━━━━━━━━
Client Information
━━━━━━━━━━━━━━━━━━
`;
    }


    /* =====================================================
       ADD FORM FIELDS
    ===================================================== */

    for (const [key, value] of formData.entries()) {

        if (
            key === "communication_channel" ||
            key === "artwork_id" ||
            key === "artwork_title" ||
            key === "artwork_price" ||
            key === "artwork_medium" ||
            key === "artwork_size"
        ) {
            continue;
        }


        if (value instanceof File) {

            if (value.name) {

                message +=
                    `\nReference Image: ${value.name}`;
            }

        } else {

            if (value !== "") {

                message +=
                    `\n${formatFieldName(key)}: ${value}`;
            }
        }
    }


    /* =====================================================
       SUCCESS MESSAGE
    ===================================================== */

    if (response) {

        response.style.display =
            "block";

        response.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <span>
                    Your request has been prepared successfully.
                    You will now be redirected to your selected
                    communication method.
                </span>
            </div>
        `;
    }


    /* =====================================================
       WHATSAPP
    ===================================================== */

    if (communication === "WhatsApp") {

        const phone =
            "201093555168";


        const whatsappURL =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


        setTimeout(() => {

            window.open(
                whatsappURL,
                "_blank"
            );

        }, 800);


        return;
    }


    /* =====================================================
       EMAIL
    ===================================================== */

    if (communication === "Email") {

        const emailAddress =
            "hello@artooooo.com";

        const emailSubject =
            encodeURIComponent(
                `${isCommission
                    ? "Commission Request"
                    : "Contact Request"}`
            );

        const emailBody =
            encodeURIComponent(message);

        const emailURL =
            `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

        setTimeout(() => {

            window.location.href =
                emailURL;

        }, 800);

        return;
    }


    return;
}


/* =========================================================
   FORMAT FIELD NAMES
========================================================= */

function formatFieldName(key) {

    const names = {

        full_name:
            "Full Name",

        name:
            "Full Name",

        email:
            "Email",

        phone:
            "Phone",

        country:
            "Country",

        governorate:
            "Governorate",

        vision:
            "Artwork Vision",

        preferred_medium:
            "Preferred Medium",

        communication_channel:
            "Preferred Communication",

        message:
            "Customer Message",

        artwork_description:
            "Artwork Description"
    };


    return names[key] || key;
}


/* =========================================================
   GLOBAL FUNCTION
========================================================= */

window.processStudioRouting =
    processStudioRouting;