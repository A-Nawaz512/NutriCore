import { useState, type FC } from "react"
import { Link } from "react-router-dom"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from "lucide-react"
import Button from "../../../shared/components/ui/Button"
import Card from "../../../shared/components/ui/Card"

interface CartItem {
    id: string
    name: string
    price: number
    image: string
    quantity: number
    capsuleCount: number
    category: string
}

const initialCartItems: CartItem[] = [
    {
        id: "prod-1",
        name: "Vitamin C 1000mg",
        price: 19.99,
        image: "https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg",
        quantity: 2,
        capsuleCount: 60,
        category: "Vitamins",
    },
    {
        id: "prod-2",
        name: "Omega-3 Fish Oil",
        price: 29.99,
        image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg",
        quantity: 1,
        capsuleCount: 30,
        category: "Omega",
    },
    {
        id: "prod-4",
        name: "Immunity Booster Complex",
        price: 24.99,
        image: "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg",
        quantity: 1,
        capsuleCount: 60,
        category: "Immunity",
    },
]

const CartPage: FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

    const updateQuantity = (id: string, delta: number) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        )
    }

    const removeItem = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = subtotal > 50 ? 0 : 5.99
    const total = subtotal + shipping

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
                <ShoppingBag size={80} className="text-gray-200 mb-6" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added any supplements yet.</p>
                <Link to="/products">
                    <Button variant="primary" size="lg">
                        Browse Products <ArrowRight size={18} className="ml-2" />
                    </Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map(item => (
                        <Card key={item.id} className="p-4 flex gap-4 items-start">
                            {/* Image */}
                            <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <span className="text-xs font-medium text-[#25492D] bg-green-50 px-2 py-0.5 rounded-full">
                                            {item.category}
                                        </span>
                                        <h3 className="font-semibold text-gray-800 mt-1 text-sm sm:text-base">{item.name}</h3>
                                        <p className="text-xs text-gray-500 mt-0.5">{item.capsuleCount} capsules</p>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0 p-1"
                                        title="Remove item"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between mt-3">
                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="px-3 py-1.5 hover:bg-gray-100 transition-colors text-gray-600"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="px-3 py-1.5 text-sm font-semibold text-gray-800 min-w-[32px] text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="px-3 py-1.5 hover:bg-gray-100 transition-colors text-gray-600"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>

                                    {/* Price */}
                                    <p className="font-bold text-[#25492D] text-base">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <ShieldCheck size={18} className="text-[#25492D]" />
                            Secure Checkout
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Truck size={18} className="text-[#25492D]" />
                            Free shipping over $50
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <Card className="p-6 sticky top-24">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal ({cartItems.reduce((s, i) => s + i.quantity, 0)} items)</span>
                                <span className="font-medium text-gray-800">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className={shipping === 0 ? "text-green-600 font-medium" : "font-medium text-gray-800"}>
                                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                                </span>
                            </div>
                            {shipping > 0 && (
                                <p className="text-xs text-gray-400">
                                    Add ${(50 - subtotal).toFixed(2)} more for free shipping
                                </p>
                            )}
                            <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-base text-gray-900">
                                <span>Total</span>
                                <span className="text-[#25492D]">${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <Button variant="primary" size="lg" className="w-full mt-6">
                            Proceed to Checkout <ArrowRight size={18} className="ml-2" />
                        </Button>

                        <Link to="/products" className="block mt-4 text-center text-sm text-[#25492D] hover:underline">
                            Continue Shopping
                        </Link>

                        {/* Promo Code */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <p className="text-sm font-medium text-gray-700 mb-2">Promo Code</p>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter code"
                                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25492D]/30 focus:border-[#25492D]"
                                />
                                <Button variant="outline" size="sm">Apply</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CartPage
