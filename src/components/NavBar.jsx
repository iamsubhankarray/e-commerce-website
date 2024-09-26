import React from 'react'

const NavBar = () => {
  return (
    <div>
  <nav class="bg-gray-100">
    <div class="container mx-auto flex items-center justify-between p-4">
      <a class="text-xl font-bold" href="#">Navbar</a>
      <button class="block lg:hidden p-2 border border-gray-300 rounded" type="button" aria-label="Toggle navigation">
        <span class="block w-6 h-6 bg-gray-500"></span>
      </button>
      <div class="hidden lg:flex lg:items-center lg:w-auto" id="navbarSupportedContent">
        <ul class="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 mb-4 lg:mb-0">
          <li class="nav-item">
            <a class="text-gray-700 hover:text-gray-900" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="text-gray-700 hover:text-gray-900" href="#">Link</a>
          </li>
          <li class="relative">
            <a class="text-gray-700 hover:text-gray-900 cursor-pointer" href="#">Dropdown</a>
            <ul class="absolute hidden bg-white shadow-md p-2 mt-2 space-y-2">
              <li><a class="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Action</a></li>
              <li><a class="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Another action</a></li>
              <li class="h-px bg-gray-200"></li>
              <li><a class="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="text-gray-400 cursor-not-allowed" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="flex space-x-2" role="search">
          <input class="border border-gray-300 rounded p-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>


  )
}

export default NavBar