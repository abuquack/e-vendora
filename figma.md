### Screens:

1. Landing Page
2. Product Listing Page
3. Product Detail Page
4. Shopping Cart
5. Checkout Process (multi-step)
6. User Authentication (Login/Register)
7. Customer Dashboard
8. Vendor Dashboard
9. Admin Panel
10. Search Results Page
11. Category Browse Page
12. Wishlist
13. Order Confirmation
14. Order Tracking
15. Reviews and Ratings Page

### Figma Components:

1. Navigation Bar
   - Variants: Desktop, Mobile, Logged In, Logged Out
2. Footer
3. Product Card
   - Variants: Grid View, List View, Featured
4. Button
   - Variants: Primary, Secondary, Disabled, Loading
5. Input Field
   - Variants: Text, Password, Number, Dropdown
6. Search Bar
7. Category Card
8. Vendor Card
9. Review Component
10. Star Rating
11. Cart Item
12. Pagination
13. Modal
   - Variants: Confirmation, Error, Success
14. Tabs
15. Accordion
16. Tooltip
17. Badge
   - Variants: Sale, New, Out of Stock
18. Progress Bar (for checkout process)
19. Image Carousel
20. Breadcrumb
21. Filter Component
22. Sort Dropdown
23. Price Range Slider
24. Notification
   - Variants: Success, Warning, Error, Info

### Prototyping Considerations:

1. User flow for adding a product to cart
2. Checkout process flow
3. User authentication flow
4. Vendor product management flow
5. Admin approval process for new vendors
6. Search and filter interaction
7. Wishlist add/remove interaction
8. Review submission process
9. Order tracking updates

### Variables (Design Tokens):

1. Colors
   - Primary
   - Secondary
   - Accent
   - Success
   - Warning
   - Error
   - Text (Primary, Secondary)
   - Background (Primary, Secondary)
2. Typography
   - Font Family
   - Font Sizes (Heading 1-6, Body, Caption)
   - Font Weights
3. Spacing
   - XS, S, M, L, XL, XXL
4. Border Radius
5. Shadow
6. Breakpoints (for responsive design)

### Screen Contents:

1. Landing Page:
   - Hero section with featured products
   - Category showcase
   - Top vendors section
   - New arrivals
   - Special offers/promotions

2. Product Listing Page:
   - Filter sidebar
   - Sort options
   - Grid/List view toggle
   - Product cards
   - Pagination

3. Product Detail Page:
   - Image carousel
   - Product information (title, price, description)
   - Variant selection (if applicable)
   - Add to cart button
   - Wishlist button
   - Vendor information
   - Reviews and ratings
   - Related products

4. Shopping Cart:
   - Cart items list
   - Quantity adjusters
   - Remove item button
   - Subtotal
   - Proceed to checkout button

5. Checkout Process:
   - Shipping information form
   - Payment method selection
   - Order summary
   - Place order button

6. User Authentication:
   - Login form
   - Registration form
   - Password reset option

7. Customer Dashboard:
   - Order history
   - Wishlist
   - Personal information
   - Address book

8. Vendor Dashboard:
   - Product management (CRUD)
   - Order management
   - Sales statistics
   - Store settings

9. Admin Panel:
   - Vendor approval list
   - Site-wide statistics
   - User management
   - Category management

### Screen Sizes to Build:

1. Mobile: 375px width (iPhone SE)
2. Tablet: 768px width (iPad Mini)
3. Desktop: >1440px width (Standard laptop)

Building for these screen sizes will ensure your design is responsive and works well across various devices.

### Key Components:

1. Navigation Bar
   - Appearance: Horizontal bar at the top of the screen
   - Contains: Logo, search bar, category menu, cart icon, user account icon
   - Why it's needed: Provides easy navigation and access to key features

2. Product Card
   - Appearance: Rectangular card with image, title, price, and action button
   - Contains: Product image, title, price, vendor name, rating, "Add to Cart" button
   - Why it's needed: Displays product information in a compact, scannable format

3. Filter Sidebar
   - Appearance: Vertical panel on the left side of product listing pages
   - Contains: Category checkboxes, price range slider, vendor filter, rating filter
   - Why it's needed: Allows users to refine product searches

4. Review Component
   - Appearance: Card-like element with user info and review text
   - Contains: User avatar, name, date, star rating, review text, helpful/not helpful buttons
   - Why it's needed: Displays user feedback for products

5. Checkout Progress Bar
   - Appearance: Horizontal bar with numbered steps
   - Contains: Steps like Cart, Shipping, Payment, Confirmation
   - Why it's needed: Shows users where they are in the checkout process

6. Vendor Dashboard Card
   - Appearance: Large card with summary information and action buttons
   - Contains: Total sales, number of orders, top-selling product, "Manage Products" button
   - Why it's needed: Gives vendors a quick overview of their store performance

7. Admin Approval Card
   - Appearance: Card with vendor information and approval buttons
   - Contains: Vendor name, store description, date applied, Approve/Reject buttons
   - Why it's needed: Allows admins to quickly review and approve new vendors

8. Category Card
   - Appearance: Square or rectangular card with image and text overlay
   - Contains: Category image, category name, number of products
   - Why it's needed: Provides visual navigation for product categories

9. Order Summary Component
   - Appearance: Box with line items and total
   - Contains: Product names, quantities, prices, subtotal, taxes, shipping, total
   - Why it's needed: Gives users a clear breakdown of their order costs

10. Notification Component
    - Appearance: Small, colorful box appearing at the top or corner of the screen
    - Contains: Icon, message text, close button
    - Why it's needed: Provides feedback for user actions (e.g., "Added to cart", "Order placed")

11. Image Carousel
    - Appearance: Large image with thumbnail navigation below or to the side
    - Contains: Main product image, thumbnail images, next/previous arrows
    - Why it's needed: Allows users to view multiple product images on the detail page

12. Search Results Component
    - Appearance: Dropdown below the search bar
    - Contains: Matching product names, categories, and vendors
    - Why it's needed: Provides quick access to search results as users type
