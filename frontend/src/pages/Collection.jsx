import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { useEffect } from 'react';

// When select Filters and then select Sort, the order isnot right.

const Collection = () => {

    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    // compatible mobile terminal
    // Responsive design
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavent');

    const toggleCategory = (e) => {

        // setCategory(prev => prev.includes(e.target.value) ? prev.filter(item => item !== e.target.value) : [...prev, e.target.value]);
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setCategory(prev => [...prev, e.target.value])
        }
    }

    const toggleSubCategory = (e) => {
        // Check if the current subCategory array already includes the selected value
        if (subCategory.includes(e.target.value)) {
            // If the value exists, it means the user wants to deselect it
            // Use the filter() method to create a new array excluding the selected value
            // This effectively "removes" the selected item from the state
            setSubCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            // If the value does not exist, it means the user wants to select it
            // Use the spread operator (...) to copy the previous array and add the new value
            // This effectively "adds" the selected item to the state
            setSubCategory(prev => [...prev, e.target.value]);
            // prev => prev.concat(e.target.value)
        }

    }

    const applyFilter = () => {
        let productsCopy = products.slice();

        // through search bar search thing
        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
        }

        setFilterProducts(productsCopy)

    }

    const sortProduct = () => {
        let fpCopy = filterProducts.slice();

        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
                break;
            default:
                applyFilter();
                break;
        }
    }

    // cause we have applyFilter Function
    // when run the first time, the productsCopy is the Original products list
    // so we remove this Function
    // useEffect(() => {
    //     setFilterProducts(products);
    // }, [])

    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch])

    useEffect(() => {
        sortProduct();
    }, [sortType])

    // useEffect(() => {
    //     console.log(category)
    // }, [category])

    // useEffect(() => {
    //     console.log(subCategory)
    // }, [subCategory])

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

            {/* Filter Options  */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />

                </p>
                {/* Category Filter */}
                {/* Dynamic ClassName that will be updated using the state variable*/}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block `}>
                    <p className='mb-3 text-sm font-medium'>CATAGORIES</p>

                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
                        </p>
                    </div>
                </div>
                {/* Sub-Category Filter*/}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block `}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>

                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'All'} text2={'COLLECTIONS'} />
                    {/* Product Sort */}
                    <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relavent">Sort by: Relavent</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to low</option>
                    </select>
                </div>

                {/* Map Products */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((item, index) => (
                            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                        ))
                    }


                </div>


            </div>


        </div>
    )
}

export default Collection
