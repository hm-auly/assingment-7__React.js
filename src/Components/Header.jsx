import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
  } from "@heroui/react";

  const menuItems = [
    "About Us",
    "Pricing",
    "Customers",
    "Solutions",
  ];

  const linkList = ( list) => (
        <div className='flex gap-6 flex-col md:flex-row   justify-end'>
            {list.map((Item, i) => (
                <div key={i}  >
                    <a className='text-lg font-medium hover:text-secondary duration-300' href="#">{Item}</a>
                </div>
            ))}
        </div>
  )

function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
  return (
    <>
        <Navbar  shouldHideOnScroll 
      isBlurred={true} style={{position: "fixed"}}
      className=" bg-transparent bg-[#002228] text-white fixed w-full flex justify-between md:px-20 px-5"
      maxWidth="xl" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>

            <div>
                <NavbarContent >
                    <NavbarBrand>
                    <img src="Logo.svg" alt="" />
                    </NavbarBrand>
                </NavbarContent>
            </div>

            <div className='hidden md:block'>
                <NavbarContent >
                    <NavbarBrand>
                    {linkList(menuItems)}
                    </NavbarBrand>
                </NavbarContent>
             </div>

             <div className='hidden md:block'>
                <NavbarContent >
                    <NavbarBrand >
                    
                        <Button className='bg-primary text-black rounded-full mr-5  hover:shadow-xl hover:bg-black hover:text-white hover:shadow-gray-500  shadow-xl duration-500 '>Book a Demo</Button>
                        <Button className='border border-gray-300  rounded-full hover:bg-white hover:text-black shadow-lg transition-all duration-500 hover:scale-x-105 hover:shadow-white'>Book a Demo</Button>
                   
                    </NavbarBrand>
                </NavbarContent>
             </div>
        {/* </div>  */}

            <NavbarContent justify='end' className='md:hidden flex'>
                <NavbarMenuToggle  aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem className='text-end'>
                {linkList(menuItems)}
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    </>
  )
}

export default Header;