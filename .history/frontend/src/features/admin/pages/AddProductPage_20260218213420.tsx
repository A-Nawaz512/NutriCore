import { FC, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Upload, Plus, X, List, Info, DollarSign, Package } from "lucide-react"
import Button from "../../../shared/components/ui/Button"
import Card from "../../../shared/components/ui/Card"
import Input from "../../../shared/components/ui/Input"
import Textarea from "../../../shared/components/ui/Textarea"

const AddProductPage: FC = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "Vitamins",
        price: "",
        stock: "",
        images: [] as string[],
        supplementQuantityOptions: [15, 30, 60],
        healthBenefits: [] as string[],
        ingredients: [] as string[],
        usageInstructions: ""
    })

    // Dynamic field handlers
    const [newBenefit, setNewBenefit] = useState("")
    const [newIngredient, setNewIngredient] = useState("")

    const handleBenefitAdd = () => {
        if (newBenefit.trim()) {
            setFormData(prev => ({ ...prev, healthBenefits: [...prev.healthBenefits, newBenefit.trim()] }))
            setNewBenefit("")
        }
    }

    const handleIngredientAdd = () => {
        if (newIngredient.trim()) {
            setFormData(prev => ({ ...prev, ingredients: [...prev.ingredients, newIngredient.trim()] }))
            setNewIngredient("")
        }
    }

    const handleRemoveItem = (field: "healthBenefits" | "ingredients", index: number) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }))
    }

    // Quantity Options
    const toggleQuantity = (qty: number) => {
        setFormData(prev => {
            const options = prev.supplementQuantityOptions.includes(qty)
                ? prev.supplementQuantityOptions.filter(q => q !== qty)
                : [...prev.supplementQuantityOptions, qty]
            return { ...prev, supplementQuantityOptions: options.sort((a, b) => a - b) }
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Submitting Product:", formData)
        // Simulate API call
        setTimeout(() => navigate("/admin/dashboard/products"), 1000)
    }

    return (
        <div className="max-w-5xl mx-auto pb-20">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                    <ArrowLeft size={20} className="text-gray-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
                    <p className="text-gray-500 text-sm">Create a new supplement listing</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">

                {/* Left Column: Main Info */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Basic Information</h3>
                        <div className="space-y-4">
                            <Input
                                label="Product Name"
                                placeholder="e.g. Vitamin C 1000mg"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                            <Textarea
                                label="Description"
                                placeholder="Detailed product description..."
                                rows={4}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2 flex items-center gap-2">
                            <List size={20} className="text-[#13458A]" /> Details & Specs
                        </h3>

                        {/* Ingredients */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Ingredients</label>
                            <div className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    value={newIngredient}
                                    onChange={(e) => setNewIngredient(e.target.value)}
                                    placeholder="Add ingredient..."
                                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13458A]/30 text-sm"
                                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleIngredientAdd())}
                                />
                                <button
                                    type="button"
                                    onClick={handleIngredientAdd}
                                    className="bg-[#13458A] text-white p-2 rounded-lg hover:bg-[#0f366e] transition-colors"
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.ingredients.map((ing, i) => (
                                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                                        {ing} <X size={14} className="cursor-pointer hover:text-red-500" onClick={() => handleRemoveItem("ingredients", i)} />
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Health Benefits */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Health Benefits</label>
                            <div className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    value={newBenefit}
                                    onChange={(e) => setNewBenefit(e.target.value)}
                                    placeholder="Add benefit..."
                                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13458A]/30 text-sm"
                                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleBenefitAdd())}
                                />
                                <button
                                    type="button"
                                    onClick={handleBenefitAdd}
                                    className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.healthBenefits.map((ben, i) => (
                                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                                        {ben} <X size={14} className="cursor-pointer hover:text-red-500" onClick={() => handleRemoveItem("healthBenefits", i)} />
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Usage Instructions */}
                        <Textarea
                            label="Usage Instructions"
                            placeholder="e.g. Take 1 capsule daily with food..."
                            value={formData.usageInstructions}
                            onChange={(e) => setFormData({ ...formData, usageInstructions: e.target.value })}
                        />
                    </Card>
                </div>

                {/* Right Column: Settings & Price */}
                <div className="space-y-6">
                    <Card className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Pricing & Inventory</h3>
                        <div className="space-y-4">
                            <div className="relative">
                                <Input
                                    label="Price ($)"
                                    type="number"
                                    placeholder="0.00"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    required
                                />
                                <DollarSign size={16} className="absolute top-[38px] right-3 text-gray-400" />
                            </div>
                            <div className="relative">
                                <Input
                                    label="Stock Quantity"
                                    type="number"
                                    placeholder="0"
                                    value={formData.stock}
                                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                                    required
                                />
                                <Package size={16} className="absolute top-[38px] right-3 text-gray-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13458A]/30 text-sm"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option>Vitamins</option>
                                    <option>Protein</option>
                                    <option>Omega</option>
                                    <option>Immunity</option>
                                    <option>Minerals</option>
                                    <option>Probiotics</option>
                                </select>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Options</h3>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Quantity per Bottle</label>
                        <div className="grid grid-cols-2 gap-3">
                            {[15, 30, 60, 120].map(qty => (
                                <div
                                    key={qty}
                                    onClick={() => toggleQuantity(qty)}
                                    className={`border rounded-lg p-3 text-center cursor-pointer transition-all ${formData.supplementQuantityOptions.includes(qty)
                                            ? "border-[#0f4d36] bg-green-50 text-[#13458A] font-medium ring-1 ring-[#13458A]"
                                            : "border-gray-200 text-gray-600 hover:border-[#13458A]/50"
                                        }`}
                                >
                                    {qty} caps
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Images</h3>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
                            <Upload size={32} className="mb-2 text-gray-400" />
                            <p className="text-sm">Click to upload or drag & drop</p>
                            <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG (max 2MB)</p>
                        </div>
                    </Card>
                </div>

                {/* Footer Actions */}
                <div className="lg:col-span-3 flex justify-end gap-4 mt-4 border-t pt-6">
                    <Button variant="outline" type="button" onClick={() => navigate(-1)}>Cancel</Button>
                    <Button variant="primary" type="submit" className="bg-[#13458A] hover:bg-[#0f366e] min-w-[150px]">
                        Create Product
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default AddProductPage
