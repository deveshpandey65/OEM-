"use client";
import { useState } from "react";

export default function PricingSection() {
    const [billing, setBilling] = useState("monthly");

    const pricingPlans = {
        monthly: [
            {
                id: "basic",
                tag: "Basic",
                tagColor: "bg-[#f4a51c]",
                price: 15,
                isPopular: false,
                description:
                    "For all individuals and starters who want to start with domaining.",
                buttonStyle: "bg-black text-white",
                features: [
                    "Access to All Features",
                    "1k lookups / per month",
                    "10 Monitoring Quota",
                    "30K API Credits / month",
                    "60 minutes Monitoring interval",
                    "20% discount on backorders",
                    "Domain Name Appraisal",
                    "Coming Soon",
                ],
            },
            {
                id: "commercial",
                tag: "Commercial",
                tagColor: "bg-[#019f95]",
                price: 55,
                isPopular: true,
                description:
                    "For all individuals and starters who want to start with domaining.",
                buttonStyle: "bg-[#f4a51c] text-white",
                features: [
                    "Access to All Features",
                    "1k lookups / per month",
                    "10 Monitoring Quota",
                    "30K API Credits / month",
                    "60 minutes Monitoring interval",
                    "20% discount on backorders",
                    "Domain Name Appraisal",
                    "Coming Soon",
                ],
            },
            {
                id: "premium",
                tag: "Premium",
                tagColor: "bg-[#9d50e3]",
                price: 105,
                isPopular: false,
                description:
                    "For all individuals and starters who want to start with domaining.",
                buttonStyle: "bg-black text-white",
                features: [
                    "Access to All Features",
                    "1k lookups / per month",
                    "10 Monitoring Quota",
                    "30K API Credits / month",
                    "60 minutes Monitoring interval",
                    "20% discount on backorders",
                    "Domain Name Appraisal",
                ],
            },
        ],
        yearly: [
            {
                id: "basic",
                tag: "Basic",
                tagColor: "bg-[#f4a51c]",
                price: 12,
                isPopular: false,
                description:
                    "For all individuals and starters who want to start with domaining.",
                buttonStyle: "bg-black text-white",
                features: [
                    "Access to All Features",
                    "1k lookups / per month",
                    "10 Monitoring Quota",
                    "30K API Credits / month",
                    "60 minutes Monitoring interval",
                    "20% discount on backorders",
                    "Domain Name Appraisal",
                    "Coming Soon",
                ],
            },
            {
                id: "commercial",
                tag: "Commercial",
                tagColor: "bg-[#019f95]",
                price: 44,
                isPopular: true,
                description:
                    "For all individuals and starters who want to start with domaining.",
                buttonStyle: "bg-[#f4a51c] text-white",
                features: [
                    "Access to All Features",
                    "1k lookups / per month",
                    "10 Monitoring Quota",
                    "30K API Credits / month",
                    "60 minutes Monitoring interval",
                    "20% discount on backorders",
                    "Domain Name Appraisal",
                    "Coming Soon",
                ],
            },
            {
                id: "premium",
                tag: "Premium",
                tagColor: "bg-[#9d50e3]",
                price: 85,
                isPopular: false,
                description:
                    "For all individuals and starters who want to start with domaining.",
                buttonStyle: "bg-black text-white",
                features: [
                    "Access to All Features",
                    "1k lookups / per month",
                    "10 Monitoring Quota",
                    "30K API Credits / month",
                    "60 minutes Monitoring interval",
                    "20% discount on backorders",
                    "Domain Name Appraisal",
                ],
            },
        ],
    };

    return (
        <section className="bg-[#f7fdfc] py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    Scrutinize The Optimum Pricing <br />
                    Scheme <span className="underline decoration-[#f4a51c]">To Begin</span>.
                </h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    Pricing plans for businesses at every stage of growth. Try our risk-free for 14 days. No credit card required.
                </p>

                {/* Toggle */}
                <div className="inline-flex border rounded overflow-hidden mb-12">
                    <button
                        className={`px-5 py-2 font-semibold ${billing === "monthly" ? "bg-black text-white" : "text-gray-600"}`}
                        onClick={() => setBilling("monthly")}
                    >
                        Monthly
                    </button>
                    <button
                        className={`px-5 py-2 font-semibold ${billing === "yearly" ? "bg-black text-white" : "text-gray-600"}`}
                        onClick={() => setBilling("yearly")}
                    >
                        Yearly
                    </button>
                    <span className="bg-[#10c9a7] px-3 py-2 text-sm text-white font-medium">Save 20%</span>
                </div>

                {/* Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
                    {pricingPlans[billing].map((plan) => (
                        <div
                            key={plan.id}
                            className={`bg-white rounded-xl  p-6 relative ${plan.isPopular
                                    ? " h-[700px]"
                                    : " border-2 border-gray-200 h-[600px]"
                                }`}
                        >
                      
                            {plan.isPopular && (
                                <div className="absolute top-0 left-0 bg-[#f44336] text-white text-xs px-2 py-1 font-semibold rounded-br-lg">
                                    Best Value
                                </div>
                            )}
                            <span
                                className={`text-xs font-bold px-2 py-1 rounded ${plan.tagColor} text-white inline-block mb-2`}
                            >
                                {plan.tag}
                            </span>
                            <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                            <h3 className="text-3xl font-bold mb-1">${plan.price}</h3>
                            <p className="text-xs text-gray-500 mb-4">Per member, per Month</p>

                            {/* Trial Button */}
                            <button
                                className={`w-full py-2 text-sm rounded font-semibold mb-6 ${plan.buttonStyle}`}
                            >
                                Start free 14-day Trial
                            </button>

                            {/* Features */}
                            <ul className="text-left space-y-2 text-sm text-gray-700">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-green-500 text-base">•</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
