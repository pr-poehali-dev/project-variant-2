const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Вариант 3</h1>
        </div>

        <div className="bg-white p-12 rounded border border-gray-300 shadow-sm mb-8">
          <div className="relative" style={{ height: '400px' }}>
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <div className="border-2 border-gray-800 bg-white px-6 py-3 rounded">
                <span className="font-medium text-sm">Концентратор 1</span>
              </div>
            </div>

            <div className="absolute left-0 top-32">
              <div className="border-2 border-gray-800 bg-white px-6 py-3 rounded">
                <span className="font-medium text-sm">Концентратор 2</span>
              </div>
            </div>

            <div className="absolute left-1/2 top-32 -translate-x-1/2">
              <div className="border-2 border-gray-800 bg-white px-6 py-3 rounded">
                <span className="font-medium text-sm">Концентратор 3</span>
              </div>
            </div>

            <div className="absolute right-0 top-32">
              <div className="border-2 border-gray-800 bg-white px-6 py-3 rounded">
                <span className="font-medium text-sm">Концентратор 4</span>
              </div>
            </div>

            <div className="absolute left-0 top-64">
              <div className="border-2 border-gray-800 bg-white px-6 py-3 rounded">
                <span className="font-medium text-sm">Концентратор 5</span>
              </div>
            </div>

            <div className="absolute left-1/2 top-64 -translate-x-1/2">
              <div className="border-2 border-gray-800 bg-white px-6 py-3 rounded">
                <span className="font-medium text-sm">Концентратор 6</span>
              </div>
            </div>

            <div className="absolute right-0 top-64">
              <div className="border-2 border-gray-800 bg-white px-6 py-3 rounded">
                <span className="font-medium text-sm">Концентратор 7</span>
              </div>
            </div>

            <div className="absolute left-16 bottom-0">
              <div className="border-2 border-gray-800 bg-white px-6 py-3 rounded">
                <span className="font-medium text-sm">Узел 1</span>
              </div>
            </div>

            <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
              <div className="border-2 border-gray-800 bg-white px-6 py-3 rounded">
                <span className="font-medium text-sm">Узел 2</span>
              </div>
            </div>

            <div className="absolute right-16 bottom-0">
              <div className="border-2 border-gray-800 bg-white px-6 py-3 rounded">
                <span className="font-medium text-sm">Узел 3</span>
              </div>
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="50" x2="15%" y2="150" stroke="#333" strokeWidth="2" />
              <line x1="50%" y1="50" x2="50%" y2="150" stroke="#333" strokeWidth="2" />
              <line x1="50%" y1="50" x2="85%" y2="150" stroke="#333" strokeWidth="2" />
              
              <line x1="15%" y1="180" x2="15%" y2="280" stroke="#333" strokeWidth="2" />
              <line x1="50%" y1="180" x2="50%" y2="280" stroke="#333" strokeWidth="2" />
              <line x1="85%" y1="180" x2="85%" y2="280" stroke="#333" strokeWidth="2" />
              
              <line x1="15%" y1="310" x2="20%" y2="380" stroke="#333" strokeWidth="2" />
              <line x1="50%" y1="310" x2="50%" y2="380" stroke="#333" strokeWidth="2" />
              <line x1="85%" y1="310" x2="80%" y2="380" stroke="#333" strokeWidth="2" />
            </svg>

            <div className="absolute left-8 top-24 text-sm text-gray-600">Сегмент 1</div>
            <div className="absolute left-1/2 top-24 -translate-x-1/2 text-sm text-gray-600">Сегмент 2</div>
            <div className="absolute right-8 top-24 text-sm text-gray-600">Сегмент 3</div>
            
            <div className="absolute left-8 top-56 text-sm text-gray-600">Сегмент 4</div>
            <div className="absolute left-1/2 top-56 -translate-x-1/2 text-sm text-gray-600">Сегмент 5</div>
            <div className="absolute right-8 top-56 text-sm text-gray-600">Сегмент 6</div>
            
            <div className="absolute left-20 top-88 text-sm text-gray-600">Сегмент 7</div>
            <div className="absolute left-1/2 top-88 -translate-x-1/2 text-sm text-gray-600">Сегмент 8</div>
            <div className="absolute right-20 top-88 text-sm text-gray-600">Сегмент 9</div>
          </div>
        </div>

        <div className="bg-white rounded border border-gray-300 shadow-sm overflow-hidden">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-3 text-left border-r border-gray-400 font-semibold"></th>
                <th className="px-4 py-3 text-center border-r border-gray-400 font-semibold">10 Base-FB</th>
                <th className="px-4 py-3 text-center border-r border-gray-400 font-semibold">10 Base-FL</th>
                <th className="px-4 py-3 text-center border-r border-gray-400 font-semibold">10 Base-T</th>
                <th className="px-4 py-3 text-center font-semibold">Длина, м</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2.5 border-r border-gray-300 font-medium bg-gray-50">Сегмент 1</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300">+</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center">1000</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2.5 border-r border-gray-300 font-medium bg-gray-50">Сегмент 2</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300">+</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center">200</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2.5 border-r border-gray-300 font-medium bg-gray-50">Сегмент 3</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300">+</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center">200</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2.5 border-r border-gray-300 font-medium bg-gray-50">Сегмент 4</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300">+</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center">400</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2.5 border-r border-gray-300 font-medium bg-gray-50">Сегмент 5</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300">+</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center">300</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2.5 border-r border-gray-300 font-medium bg-gray-50">Сегмент 6</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300">+</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center">200</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2.5 border-r border-gray-300 font-medium bg-gray-50">Сегмент 7</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300">+</td>
                <td className="px-4 py-2.5 text-center">100</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2.5 border-r border-gray-300 font-medium bg-gray-50">Сегмент 8</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300">+</td>
                <td className="px-4 py-2.5 text-center">100</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2.5 border-r border-gray-300 font-medium bg-gray-50">Сегмент 9</td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300"></td>
                <td className="px-4 py-2.5 text-center border-r border-gray-300">+</td>
                <td className="px-4 py-2.5 text-center">40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
