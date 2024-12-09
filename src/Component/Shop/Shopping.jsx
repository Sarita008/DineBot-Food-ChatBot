import React, { useState } from 'react';
import "../../assests/CSS/Shop/Shopping.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoStar } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
// import Image from "../../assests/Images/biryani.jpg";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import Chowmin from "../../assests/Images/chowmin.jpg";
import Dosa from "../../assests/Images/dosa.jpg";


const Shopping = () => {
    const [categoryChooose, setCategoryChoose] = useState(false)    //choosing between category and products button

    //Products
    const [options, setOptions] = useState({
        newArrivals: true,
        bestSales: false,
        trending: false,
        offers: false
    });

    //onclick
    const btnData = ()=>{
        if (options.newArrivals) {
            return "New Arrivals"
        }else if (options.bestSales){
            return "Best Sales"
        }else if (options.trending){
            return "Trending"
        }else if (options.offers){
            return "Offers"
        }else {
            return "New Arrivals"
        }
    }

    const itemCard = (product)=>{
        return(
            //PRODUCTS
            <div key={product.id} className="product-cardxx">
                <p style={{
                    backgroundColor:`${product.color}`, color:"white", padding:"5px", width:"35px", position: "relative", left: "-20px",top: "-21px", borderTopLeftRadius: "3px 3px"
                }}>{product.offerValue}</p>
                <img src={product.image} alt={product.name} className="productss-imagexx" />
                <div className="product-detailsxx">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <p>{product.rating}</p>
                        {view === 'list' && (
                        <>
                    <p>{product.description}</p>
                        </> 
                        )}
                    <div className="action-buttonsx">
                        <FaCartArrowDown className='products-icon-rrx' />
                        <IoEyeSharp className='products-icon-rrx'/>
                        <IoMdHeart className='products-icon-rrx'/>
                    </div>
                </div>
            </div>
        )
    }



    //Categories
        const[category, setCategory] = useState({
            viewall: true,
            Chawmin:false,
            Dosa:false,
            PavBhaji: false,
            PaniPuri: false,
            GulabJamun: false,
            Pizza: false
        });


    const products = [
        { 
            Chawmin:true,
            Dosa:false,
            PavBhaji: false,
            PaniPuri: false,
            GulabJamun: true,
            Pizza: false,
            bestSales: true,
            trending: false,            
            offers: false,
            offerValue:"15%",
            color: "#e66d6d",
            image: Chowmin,
            name: 'Chawmin', 
            price: '₹80', 
            rating: 4.5,
            description: 'Experience the captivating aroma and delicate texture of Basmati Rice, a treasured grain that hails from the lush fields of India. Renowned for its long, slender grains and distinctive fragrance, our Basmati Rice'
        },
        { 
            Chawmin:true,
            Dosa:true,
            PavBhaji: false,
            PaniPuri: false,
            GulabJamun: false,
            Pizza: false,
            bestSales: false,
            trending: true,
            offers: false,
            offerValue:"20%",
            color: "#699c47",
            image: Dosa,
            name: 'Dosa', 
            price: '₹150', 
            rating: 4,
            description: 'Discover the nutritional power and vibrant appeal of Red Rice, a wholesome grain that stands out with its rich red hue and robust flavor. Harvested with care, our Red Rice offers a delightful nutty taste and a range of h'
        },
        { 
            Chawmin:true,
            Dosa:false,
            PavBhaji: true,
            PaniPuri: false,
            GulabJamun: false,
            Pizza: false,
            bestSales: false,
            trending: false,
            offers: true,
            offerValue:"10%",
            color: "#e66d6d",
            image: "https://media.istockphoto.com/id/801924694/photo/masala-pavbhaji-or-pav-bhaji.jpg?s=612x612&w=0&k=20&c=6XqxmqsHgrxT_WmsOUhCwe13sGfPXxOKhbTr5QiWL7g=",
            name: 'Pav Bhaji', 
            price: '₹100', 
            rating: 4.5,
            description: 'Experience the captivating aroma and delicate texture of Basmati Rice, a treasured grain that hails from the lush fields of India. Renowned for its long, slender grains and distinctive fragrance, our Basmati Rice is a cu'
        },
        { 
            Chawmin:false,
            Dosa:false,
            PavBhaji: false,
            PaniPuri: true,
            GulabJamun: false,
            Pizza: true,
            bestSales: true,
            trending: false,
            offers: false,
            offerValue:"30%",
            color: "#699c47",
            image: "https://media.istockphoto.com/id/1314329942/photo/goal-gappa-or-pani-puri.jpg?s=612x612&w=0&k=20&c=l6akiKMfTLE9nR4VonhiOZpZGDY4aEjimAN-BSskF-A=",
            name: 'Pani Puri', 
            price: '₹60', 
            rating: 3.5,
            description: 'Embrace the warm and aromatic essence of Ground Cinnamon, a beloved spice that adds a touch of cozy indulgence to your culinary creations. Carefully ground from premium-quality cinnamon sticks, our ground cinnamon offers'
        },
        { 
            Chawmin:false,
            Dosa:true,
            PavBhaji: false,
            PaniPuri: false,
            GulabJamun: true,
            Pizza: false,
            bestSales: false,
            trending: true,
            offers: false,
            offerValue:"30%",
            color: "#699c47",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfzR2n9LL42aQ7z-A3zmm9_YyU2GxBRewgw&s",
            name: 'Gulab Jamun', 
            price: '₹300', 
            rating: 4.5,
            description: 'Enhance your culinary creations with the exquisite taste and texture of Flaky Sea Salt, a premium salt that elevates the flavors of your dishes to new heights. Meticulously crafted and harvested from the purest seawater,'
        },
        { 
            Chawmin:false,
            Dosa:true,
            PavBhaji: false,
            PaniPuri: false,
            GulabJamun: false,
            Pizza: true,
            bestSales: false,
            trending: true,
            offers: false,
            offerValue:"20%",
            color: "#699c47",
            image: "https://t3.ftcdn.net/jpg/09/51/06/22/360_F_951062220_gfaq78g2ivTW2CVfHKFC95wB9Ujcpd2g.jpg",
            name: 'Masala Dosa', 
            price: '₹150', 
            rating: 3,
            description: 'Experience the allure of classic Italian cuisine with our Spaghetti Pasta, a timeless and beloved pasta shape that embodies the essence of Italian comfort food. Crafted with precision and passion, our spaghetti pasta off'
        },
        { 
            Chawmin:true,
            Dosa:false,
            PavBhaji: true,
            PaniPuri: false,
            GulabJamun: false,
            Pizza: false,
            bestSales: false,
            trending: false,
            offers: true,
            offerValue:"10%",
            color: "#e66d6d",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxgkdfgtF0_ZgHNk2fT0eI7rrtQAMk5IPgg&s",
            name: 'Pav Bhaji', 
            price: '₹180', 
            rating: 4.5,
            description: 'Delight in the traditional Italian pasta experience with our Fettuccine Noodles, a classic and versatile choice that embodies the essence of authentic Italian cuisine. Crafted with care and expertise, our fettuccine nood'
        },
        { 
            Chawmin:false,
            Dosa:true,
            PavBhaji: false,
            PaniPuri: false,
            GulabJamun: false,
            Pizza: true,
            bestSales: true,
            trending: false,
            offers: false,
            offerValue:"5%",
            color: "#e66d6d",
            image: "https://ministryofcurry.com/wp-content/uploads/2023/12/crispy-dosa_-3.jpg",
            name: 'Dosa', 
            price: '₹90', 
            rating: 4.5,
            description: 'Experience the versatility and quality of our Premium All-Purpose Flour, a kitchen essential that meets the highest standards of baking and cooking. Meticulously crafted from the finest wheat, our all-purpose flour offer'
        },
        { 
            Chawmin:false,
            Dosa:true,
            PavBhaji: true,
            PaniPuri: false,
            GulabJamun: false,
            Pizza: false,
            bestSales: false,
            trending: true,
            offers: false,
            offerValue:"15%",
            color: "#e66d6d",
            image: "https://media.istockphoto.com/id/1155185428/photo/indian-spicy-food-paav-bhaji-or-pav-bhaji.jpg?s=612x612&w=0&k=20&c=AMT1hmTm1xhTT0KmGsGPRyU6cPe-HFJuvkOgiT0m3Jo=",
            name: 'Pav Bhaji', 
            price: '₹110', 
            rating: 5,
            description: 'Embrace the essence of Mediterranean goodness with our Pure Olive Oil, a versatile and nutritious oil that has been cherished for centuries. Extracted from premium-quality olives using a cold-press process, our olive oil'
        },
        { 
            Chawmin:false,
            Dosa:false,
            PavBhaji: false,
            PaniPuri: true,
            GulabJamun: false,
            Pizza: true,
            bestSales: false,
            trending: false,
            offers: true,
            offerValue:"10%",
            color: "#e66d6d",
            image: "https://i.pinimg.com/564x/a2/7e/e4/a27ee4b1b83dc95565f02e72a78c154c.jpg",
            name: 'Pani Puri', 
            price: '₹70', 
            rating: 4.5,
            description: 'Introduce your little one to the delightful taste of summer with our Organic Melon Baby Food Puree, a gentle and nourishing option designed especially for growing infants. Made from certified organic melons, this puree o'
        },
        { 
            Chawmin:false,
            Dosa:false,
            PavBhaji: true,
            PaniPuri: false,
            GulabJamun: true,
            Pizza:true,
            bestSales: true,
            trending: false,
            offers: false,
            offerValue:"23%",
            color: "#699c47",
            image: "https://www.hyderabadflowergifts.com/image/cache/catalog/Sweets/Pullareddy%20Sweets/gulab-jamun-pullareddy-sweets-550x330.jpg.webp",
            name: 'Gulab Jamun', 
            price: '₹250', 
            rating: 4.5,
            description: 'Immerse yourself in the luscious essence of summer with our Organic Cantaloupe Chunks, a naturally sweet and juicy delight that captures the full flavor of ripe cantaloupes. Sourced from certified organic farms, these ca'
        },
        { 
            Chawmin:false,
            Dosa:false,
            PavBhaji: false,
            PaniPuri: false,
            GulabJamun: false,
            Pizza: true,
            bestSales: false,
            trending: true,
            offers: false,
            offerValue:"18%",
            color: "#699c47",
            image: "https://www.foodorderkar.com/wp-content/uploads/2022/10/478339.jpg",
            name: 'Corn Pizza', 
            price: '₹200', 
            rating: 3.5,
            description: 'Savor the pure essence of summer with our Organic Honeydew Melon Wedges, a refreshing and naturally sweet delight that captures the juicy goodness of ripe honeydew melons. Harvested from organic farms, these melon wedges'
        },
        
        
        
    ];

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);
    const [view, setView] = useState('grid');

    const handleCategoryMouseEnter = () => {
        setIsCategoryOpen(true);
      };
    
      const handleCategoryMouseLeave = () => {
        setIsCategoryOpen(false);
        setIsSubCategoryOpen(false);
      };

      const [searchQuery, setSearchQuery] = useState('');

      //onChange
      const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
      };

      //onsubmit
      const handleSearch = (event) => {
        event.preventDefault();
        // Handle the search functionality here
        console.log('Searching for:', searchQuery);
      };

      //OnClick
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop")
    console.log("handleClick");
  }


  return (
    <>
        <div className='shop-container'>
            <div className='shop-content'>
                <div className="items has-dropdown" onMouseEnter={handleCategoryMouseEnter} onMouseLeave={handleCategoryMouseLeave}  >
                <button className="search-buttons"  onClick={handleClick}>ALL CATEGORIES</button>
                        {isCategoryOpen && (
                    <div className="search-dropdown">
                         <a className="search-item" href="/">Chawmin</a>
                        <a className="search-item" href="/">Dosa</a>
                        <a className="search-item" href="/">PavBhaji</a>
                        <a className="search-item" href="/">PaniPuri</a>
                        <a className="search-item" href="/">GulabJamun</a>
                        <a className="search-item" href="/"> Pizza</a>
                    </div>
                        )}
                </div>

                        {/* Search Bar */}
                <div className='shop-content2'>
                    <form className="search-bar" onSubmit={handleSearch} action="#">
                        <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleInputChange}
                        />
                    </form>
                </div>

                        {/* ICON */}
                <div className='shop-content3'>
                    <div className='shop-icon'>
                    <IoFastFoodOutline />
                    </div>
                </div>
            </div>


                            {/* CATEGORIES */}
            <div className='shop-main'>
                <div className='shop-categories'>
                    <div className='shop-heading'>
                        <h3>Catgories</h3>
                        <div className='shop-main-links'>
                            <button onClick={()=>{
                                setCategory({
                                    viewall: true,
                                    Chawmin:false,
                                    Dosa:false,
                                    PavBhaji: false,
                                    PaniPuri: false,
                                    GulabJamun: false,
                                    Pizza: false
                                });
                                setCategoryChoose(true)
                            }}>  
                                <FaRegCircle style={{paddingTop:"5px", paddingRight:"5px", }} />
                                View All
                            </button>

                            <button onClick={()=>{
                                setCategory({
                                    viewall: false,
                                    Chawmin:true,
                                    Dosa:false,
                                    PavBhaji: false,
                                    PaniPuri: false,
                                    GulabJamun: false,
                                    Pizza: false
                                });
                                setCategoryChoose(true)
                            }}>
                                <FaRegCircle style={{paddingTop:"5px", paddingRight:"5px"}} /> 
                                Chawmin
                            </button>

                            <button onClick={()=>{
                                setCategory({
                                    viewall: false,
                                    Chawmin:false,
                                    Dosa:true,
                                    PavBhaji: false,
                                    PaniPuri: false,
                                    GulabJamun: false,
                                    Pizza: false
                                });
                                setCategoryChoose(true)
                            }}>
                                <FaRegCircle  style={{paddingTop:"5px", paddingRight:"5px"}} />     
                                Dosa
                            </button>

                            <button onClick={()=>{
                                setCategory({
                                    viewall: false,
                                    Chawmin:false,
                                    Dosa:false,
                                    PavBhaji: true,
                                    PaniPuri: false,
                                    GulabJamun: false,
                                    Pizza: false
                                });
                                setCategoryChoose(true)
                            }}>
                                <FaRegCircle  style={{paddingTop:"5px", paddingRight:"5px"}} /> 
                                PavBhaji
                            </button>

                            <button onClick={()=>{
                                setCategory({
                                    viewall: false,
                                    Chawmin:false,
                                    Dosa:false,
                                    PavBhaji: false,
                                    PaniPuri: true,
                                    GulabJamun: false,
                                    Pizza: false
                                });
                                setCategoryChoose(true)
                            }}>
                                <FaRegCircle style={{paddingTop:"5px", paddingRight:"5px"}} />
                                PaniPuri
                            </button>

                            <button onClick={()=>{
                                setCategory({
                                    viewall: false,
                                    Chawmin:false,
                                    Dosa:false,
                                    PavBhaji: false,
                                    PaniPuri: false,
                                    GulabJamun: true,
                                    Pizza: false
                                });
                                setCategoryChoose(true)
                            }}>
                                <FaRegCircle style={{paddingTop:"5px", paddingRight:"5px"}} />
                                GulabJamun
                            </button>

                            <button onClick={()=>{
                                setCategory({
                                    viewall: false,
                                    Chawmin:false,
                                    Dosa:false,
                                    PavBhaji: false,
                                    PaniPuri: false,
                                    GulabJamun: false,
                                    Pizza: true
                                });
                                setCategoryChoose(true)
                            }}>
                                <FaRegCircle style={{paddingTop:"5px", paddingRight:"5px"}} />
                                Pizza
                            </button>
                        </div>           
                    </div>

                            {/* RATING */}
                    <div className='shop-rating'>
                        <h3>Ratings</h3>
                        <div className='shop-icons-rx'>
                            <a href='/'>
                                <FaRegCircle  style={{paddingTop:"5px", color:"#777", gap: "20px"}} />
                                <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /> (6)
                            </a>
                            <a href='/'>
                                <FaRegCircle style={{paddingTop:"5px", color:"#777"}} />
                                <IoStar /><IoStar /><IoStar /><IoStar />   <CiStar/> (5)
                            </a>
                            <a href='/'>
                                <FaRegCircle style={{paddingTop:"5px", color:"#777"}} />
                                <IoStar /><IoStar /><IoStar />  <CiStar/><CiStar/>(0)
                            </a>
                            <a href='/'>
                                <FaRegCircle style={{paddingTop:"5px", color:"#777"}} />
                                <IoStar /><IoStar /> <CiStar/><CiStar/><CiStar/> (1)
                            </a>
                            <a href='/'>
                                <FaRegCircle style={{paddingTop:"5px", color:"#777"}} />
                                <IoStar />  <CiStar/><CiStar/><CiStar/><CiStar/> (0)
                            </a>
                        </div>
                    </div>

                            {/* IMAGE */}
                    <div className='shop-img'>
                        <img src="https://i.pinimg.com/550x/18/08/a0/1808a0c8cd19c344d8b3530e4daaf018.jpg" />
                    </div>

                </div>

                            {/* -------------IMAGES--------------- */}
                
                                {/* SERACH KEYWORD */}
            <div className='main-container-rx'>
                <div className='shop-description-rx'>
                    <div className='shop-keyword'>
                        <form className="shop-search-bar" onSubmit={handleSearch} action="#">
                            <input
                            type="text"
                            placeholder="Search Keywords..."
                            value={searchQuery}
                            onChange={handleInputChange}
                            />
                        </form>
                    </div>

                            {/* NEW ARRIVALS */}
                    <div className="buttons-box">
                        <div className="sub-division first">
                            <BsFillGrid3X3GapFill onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''} style={{fontSize:"1.6rem", marginLeft:"20px"}}   />
                            <FaListUl  onClick={() => setView('list')} className={view === 'list' ? 'active' : ''} style={{fontSize:"1.6rem"}} />
                        </div>

                        <div className="items has-dropdowns" onMouseEnter={handleCategoryMouseEnter} onMouseLeave={handleCategoryMouseLeave}  >
                            <button className="new-arrivals"  onClick={handleClick}>{btnData()}</button>
                                {isCategoryOpen && (
                            <div className="new-dropdown">
                                <button className="new-item" onClick={()=>{setOptions({
                                    newArrivals: true,
                                    bestSales: false,
                                    trending: false,
                                    offers: false
                                });
                                setCategoryChoose(false)
                                }}>New Arrivals</button>
                                <button className="new-item" onClick={()=>{setOptions({
                                    newArrivals: false,
                                    bestSales: true,
                                    trending: false,
                                    offers: false
                                });
                                setCategoryChoose(false)
                                }}>Best sale</button>
                                <button className="new-item" onClick={()=>{setOptions({
                                    newArrivals: false,
                                    bestSales: false,
                                    trending: true,
                                    offers: false
                                });
                                setCategoryChoose(false)
                                }}>Trending</button>
                                <button className="new-item" onClick={()=>{setOptions({
                                    newArrivals: false,
                                    bestSales: false,
                                    trending: false,
                                    offers: true
                                });
                                setCategoryChoose(false)
                                }}>Offers</button>
                            </div>
                                )}
                        </div>
                    </div>  
                </div> 

                                {/* PRODUCT IAMGES tags*/}      
                <div className={view === 'grid' ? 'grid-view' : 'list-view'}>
                    {!categoryChooose?(
                        <>
                            {products.map(product => (
                                (options.bestSales & product.bestSales? (itemCard(product)):(
                                    (options.offers & product.offers ? (itemCard(product)):(
                                        (options.trending & product.trending ? (itemCard(product)):(
                                            (options.newArrivals? (itemCard(product)):(<></>))
                                        ))
                                    ))
                                )) 
                                ))}
                        </>
                    ):(
                        <>
                            {products.map(product => (
                            (category.Chawmin & product.Chawmin? (itemCard(product)):(
                                (category.Dosa & product.Dosa ? (itemCard(product)):(
                                    (category.PavBhaji & product.PavBhaji ? (itemCard(product)):(
                                        (category.PaniPuri & product.PaniPuri? (itemCard(product)):(
                                            (category.GulabJamun & product.GulabJamun ? (itemCard(product)):(
                                                (category.Pizza & product.Pizza? (itemCard(product)):(
                                                    (category.viewall? (itemCard(product)):(<></>))
                                                ))
                                            ))
                                        ))
                                    ))
                                ))
                            )) 
                            ))}
                        </>
                    )}
                
                    

                </div>
            </div>
            </div>
        </div>
        
    </>
  )
}

export default Shopping;