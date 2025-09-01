export default function Projects() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore my work as an Amazon virtual assistant</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Keyword Research Project */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <img
                src="/assets/project1.jfif"
                alt="Keyword Research Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Keyword Research</h3>
              <p className="text-gray-600 mb-4">
                Strategic keyword targeting to enhance product visibility and drive organic traffic for Amazon listings.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 font-medium">View Case Study</span>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Listing Optimization Project */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <img
                src="/assets/project2.jfif"
                alt="Listing Optimization"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Listing Optimization & Audit</h3>
              <p className="text-gray-600 mb-4">
                Strategic listing creation and in-depth audits for enhanced visibility and improved conversion rates.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-medium">View Case Study</span>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Amazon PPC Management Project */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
              <img
                src="/assets/project3.jfif"
                alt="PPC Management Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Amazon PPC Management</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive strategies to maximize ad performance and sales through data-driven campaign management.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-600 font-medium">View Case Study</span>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* PPC Campaign Optimization Project */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
              <img
                src="/assets/project4.jfif"
                alt="Campaign Optimization"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PPC Campaign Optimization</h3>
              <p className="text-gray-600 mb-4">
                Data-driven techniques to improve campaign efficiency and increase return on investment for Amazon ads.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-orange-600 font-medium">View Case Study</span>
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-700 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
