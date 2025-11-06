import { Checkbox } from '@/components/ui/checkbox';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-orange-200 px-4 py-2 mb-6 rounded border border-orange-300">
          <h1 className="text-base font-semibold text-gray-800">Все рейсы, которые были задержаны</h1>
        </div>

        <div className="mb-8 bg-white p-8 rounded border border-gray-300 shadow-sm">
          <div className="flex justify-start items-start gap-12 relative">
            <div className="border-2 border-gray-600 bg-gray-100 p-4 rounded w-56 relative z-10">
              <div className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-yellow-600">🔑</span>
                <span className="text-sm">Рейсы</span>
              </div>
              <div className="space-y-1.5 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-600">🔑</span>
                  <span>Код рейса</span>
                </div>
                <div className="pl-5">Дата и время вылета</div>
                <div className="pl-5">Дата и время посадки</div>
                <div className="pl-5">Вылет был не распис...</div>
                <div className="pl-5">Код самолёта</div>
                <div className="pl-5">Количество пасса...</div>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="border-2 border-gray-600 bg-white p-4 rounded w-56 relative z-10">
                <div className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-yellow-600">🔑</span>
                  <span className="text-sm">Аэропорты_1</span>
                </div>
                <div className="space-y-1.5 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-600">🔑</span>
                    <span>Код аэропорта</span>
                  </div>
                  <div className="pl-5">Название</div>
                  <div className="pl-5">Населённый пункт</div>
                </div>
              </div>

              <div className="border-2 border-gray-600 bg-white p-4 rounded w-56 relative z-10">
                <div className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-yellow-600">🔑</span>
                  <span className="text-sm">Аэропорты_2</span>
                </div>
                <div className="space-y-1.5 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-600">🔑</span>
                    <span>Код аэропорта</span>
                  </div>
                  <div className="pl-5">Название</div>
                  <div className="pl-5">Населённый пункт</div>
                </div>
              </div>
            </div>

            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                </marker>
              </defs>
              <path d="M 224 60 L 310 60" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 224 80 L 520 60" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
            </svg>
          </div>
        </div>

        <div className="bg-white rounded border border-gray-300 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-3 py-2.5 text-left border-r border-gray-400 font-semibold">Поле:</th>
                  <th className="px-3 py-2.5 text-left border-r border-gray-400 font-semibold">
                    <select className="border border-gray-400 px-2 py-1 rounded text-xs w-full bg-white">
                      <option>Код рейса</option>
                    </select>
                  </th>
                  <th className="px-3 py-2.5 text-left border-r border-gray-400 font-semibold">Дата и время вылета</th>
                  <th className="px-3 py-2.5 text-left border-r border-gray-400 font-semibold">Дата и время посадки</th>
                  <th className="px-3 py-2.5 text-left border-r border-gray-400 font-semibold">Аэропорт вылета: Назв.</th>
                  <th className="px-3 py-2.5 text-left border-r border-gray-400 font-semibold">Аэропорт посадки: Наз</th>
                  <th className="px-3 py-2.5 text-left border-r border-gray-400 font-semibold">Бортовой номер</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Вылет был не расписан</th>
                </tr>
                <tr className="border-t-2 border-gray-800">
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-gray-100 font-semibold">Имя таблицы:</th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal">Рейсы</th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal">Рейсы</th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal">Рейсы</th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal">Аэропорты_1</th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal">Аэропорты_2</th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal">Самолёты</th>
                  <th className="px-3 py-2 text-left bg-white font-normal">Рейсы</th>
                </tr>
                <tr className="border-t border-gray-300">
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-gray-100 font-semibold">Сортировка:</th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal">по возрастанию</th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal">по убыванию</th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left bg-white font-normal"></th>
                </tr>
                <tr className="border-t border-gray-300">
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-gray-100 font-semibold">Вывод на экран:</th>
                  <th className="px-3 py-2 text-center border-r border-gray-300 bg-white">
                    <div className="flex justify-center">
                      <Checkbox defaultChecked />
                    </div>
                  </th>
                  <th className="px-3 py-2 text-center border-r border-gray-300 bg-white">
                    <div className="flex justify-center">
                      <Checkbox defaultChecked />
                    </div>
                  </th>
                  <th className="px-3 py-2 text-center border-r border-gray-300 bg-white">
                    <div className="flex justify-center">
                      <Checkbox defaultChecked />
                    </div>
                  </th>
                  <th className="px-3 py-2 text-center border-r border-gray-300 bg-white">
                    <div className="flex justify-center">
                      <Checkbox defaultChecked />
                    </div>
                  </th>
                  <th className="px-3 py-2 text-center border-r border-gray-300 bg-white">
                    <div className="flex justify-center">
                      <Checkbox defaultChecked />
                    </div>
                  </th>
                  <th className="px-3 py-2 text-center border-r border-gray-300 bg-white">
                    <div className="flex justify-center">
                      <Checkbox defaultChecked />
                    </div>
                  </th>
                  <th className="px-3 py-2 text-center bg-white">
                    <div className="flex justify-center">
                      <Checkbox />
                    </div>
                  </th>
                </tr>
                <tr className="border-t border-gray-300">
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-gray-100 font-semibold">Условие отбора:</th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left bg-white font-normal"></th>
                </tr>
                <tr className="border-t border-gray-300">
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-gray-100 font-semibold">или:</th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left border-r border-gray-300 bg-white font-normal"></th>
                  <th className="px-3 py-2 text-left bg-white font-normal">Ложь</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t-2 border-gray-800">
                  <td className="px-3 py-12 bg-white" colSpan={8}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
