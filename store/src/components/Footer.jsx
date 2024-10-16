import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-800 text-white py-8 mt-32 px-10">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* <!-- Company Info --> */}
            <div>
                <h5 class="text-lg font-bold mb-4">Company</h5>
                <ul>
                    <li><a href="#" class="hover:underline">About Us</a></li>
                    <li><a href="#" class="hover:underline">Careers</a></li>
                    <li><a href="#" class="hover:underline">Blog</a></li>
                    <li><a href="#" class="hover:underline">Contact Us</a></li>
                </ul>
            </div>
            {/* <!-- Customer Service --> */}
            <div>
                <h5 class="text-lg font-bold mb-4">Customer Service</h5>
                <ul>
                    <li><a href="#" class="hover:underline">FAQ</a></li>
                    <li><a href="#" class="hover:underline">Shipping Information</a></li>
                    <li><a href="#" class="hover:underline">Returns</a></li>
                    <li><a href="#" class="hover:underline">Privacy Policy</a></li>
                </ul>
            </div>
            {/* <!-- Follow Us --> */}
            <div>
                <h5 class="text-lg font-bold mb-4">Follow Us</h5>
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:underline">Facebook</a></li>
                    <li><a href="#" class="hover:underline">Twitter</a></li>
                    <li><a href="#" class="hover:underline">Instagram</a></li>
                    <li><a href="#" class="hover:underline">LinkedIn</a></li>
                </ul>
            </div>
            {/* <!-- Contact Info --> */}
            <div>
                <h5 class="text-lg font-bold mb-4">Contact Info</h5>
                <p>123 Main St, Anytown, USA</p>
                <p>Email: <a href="mailto:info@example.com" class="hover:underline">info@example.com</a></p>
                <p>Phone: <a href="tel:+1234567890" class="hover:underline">+1 (234) 567-890</a></p>
            </div>
        </div>
    </div>
    <div class="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </div>
</footer>

    </div>
  )
}

export default Footer
