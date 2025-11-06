const Index = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Вариант 2</h1>
        
        {/* Схема */}
        <div className="mb-12">
          <div className="flex flex-col items-center">
            {/* Концентратор 1 */}
            <div className="border-2 border-gray-800 px-6 py-3 mb-8 bg-white">
              <span className="font-semibold">Концентратор 1</span>
            </div>

            {/* Три ветки от Концентратора 1 */}
            <div className="flex justify-between w-full max-w-5xl relative mb-8">
              {/* Сегмент 1 */}
              <div className="flex flex-col items-center w-1/3">
                <div className="h-16 w-0.5 bg-gray-800 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 1</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Концентратор 2</span>
                </div>
                
                {/* Сегмент 4 */}
                <div className="h-16 w-0.5 bg-gray-800 mt-2 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 4</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Концентратор 5</span>
                </div>

                {/* Сегмент 7 */}
                <div className="h-16 w-0.5 bg-gray-800 mt-2 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 7</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Узел 1</span>
                </div>
              </div>

              {/* Сегмент 2 */}
              <div className="flex flex-col items-center w-1/3">
                <div className="h-16 w-0.5 bg-gray-800 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 2</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Концентратор 3</span>
                </div>

                {/* Сегмент 5 */}
                <div className="h-16 w-0.5 bg-gray-800 mt-2 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 5</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Концентратор 6</span>
                </div>

                {/* Сегмент 8 */}
                <div className="h-16 w-0.5 bg-gray-800 mt-2 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 8</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Узел 2</span>
                </div>
              </div>

              {/* Сегмент 3 */}
              <div className="flex flex-col items-center w-1/3">
                <div className="h-16 w-0.5 bg-gray-800 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 3</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Концентратор 4</span>
                </div>

                {/* Сегмент 6 */}
                <div className="h-16 w-0.5 bg-gray-800 mt-2 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 6</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Концентратор 7</span>
                </div>

                {/* Сегмент 9 */}
                <div className="h-16 w-0.5 bg-gray-800 mt-2 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 9</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Узел 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Таблица */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-2 border-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-2 border-gray-800 px-4 py-3 text-left font-semibold"></th>
                <th className="border-2 border-gray-800 px-4 py-3 text-center font-semibold">10 Base-FB</th>
                <th className="border-2 border-gray-800 px-4 py-3 text-center font-semibold">10 Base-FL</th>
                <th className="border-2 border-gray-800 px-4 py-3 text-center font-semibold">10 Base-T</th>
                <th className="border-2 border-gray-800 px-4 py-3 text-center font-semibold">Длина, м</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-gray-800 px-4 py-3 font-medium">Сегмент 1</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">+</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">1000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-gray-800 px-4 py-3 font-medium">Сегмент 2</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">+</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">200</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-800 px-4 py-3 font-medium">Сегмент 3</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">+</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-gray-800 px-4 py-3 font-medium">Сегмент 4</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">+</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">400</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-800 px-4 py-3 font-medium">Сегмент 5</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">+</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">300</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-gray-800 px-4 py-3 font-medium">Сегмент 6</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">+</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">200</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-800 px-4 py-3 font-medium">Сегмент 7</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">+</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">100</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-gray-800 px-4 py-3 font-medium">Сегмент 8</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">+</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">100</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-800 px-4 py-3 font-medium">Сегмент 9</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center"></td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">+</td>
                <td className="border-2 border-gray-800 px-4 py-3 text-center">40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
