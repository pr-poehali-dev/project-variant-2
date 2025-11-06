import { useState } from 'react';
import { Button } from '@/components/ui/button';

const variantData = {
  1: {
    segments: [
      { name: 'Сегмент 1', fb: '+', fl: '', t: '', length: '1000' },
      { name: 'Сегмент 2', fb: '', fl: '+', t: '', length: '200' },
      { name: 'Сегмент 3', fb: '', fl: '+', t: '', length: '200' },
      { name: 'Сегмент 4', fb: '', fl: '+', t: '', length: '400' },
      { name: 'Сегмент 5', fb: '+', fl: '', t: '', length: '300' },
      { name: 'Сегмент 6', fb: '', fl: '+', t: '', length: '200' },
      { name: 'Сегмент 7', fb: '', fl: '', t: '+', length: '100' },
      { name: 'Сегмент 8', fb: '', fl: '', t: '+', length: '100' },
      { name: 'Сегмент 9', fb: '', fl: '', t: '+', length: '40' }
    ]
  },
  2: {
    segments: [
      { name: 'Сегмент 1', fb: '+', fl: '', t: '', length: '1000' },
      { name: 'Сегмент 2', fb: '', fl: '+', t: '', length: '200' },
      { name: 'Сегмент 3', fb: '', fl: '+', t: '', length: '200' },
      { name: 'Сегмент 4', fb: '', fl: '+', t: '', length: '400' },
      { name: 'Сегмент 5', fb: '+', fl: '', t: '', length: '300' },
      { name: 'Сегмент 6', fb: '', fl: '+', t: '', length: '200' },
      { name: 'Сегмент 7', fb: '', fl: '', t: '+', length: '100' },
      { name: 'Сегмент 8', fb: '', fl: '', t: '+', length: '100' },
      { name: 'Сегмент 9', fb: '', fl: '', t: '+', length: '40' }
    ]
  },
  3: {
    segments: [
      { name: 'Сегмент 1', fb: '+', fl: '', t: '', length: '1000' },
      { name: 'Сегмент 2', fb: '', fl: '+', t: '', length: '200' },
      { name: 'Сегмент 3', fb: '', fl: '+', t: '', length: '200' },
      { name: 'Сегмент 4', fb: '', fl: '+', t: '', length: '400' },
      { name: 'Сегмент 5', fb: '+', fl: '', t: '', length: '300' },
      { name: 'Сегмент 6', fb: '', fl: '+', t: '', length: '200' },
      { name: 'Сегмент 7', fb: '', fl: '', t: '+', length: '100' },
      { name: 'Сегмент 8', fb: '', fl: '', t: '+', length: '100' },
      { name: 'Сегмент 9', fb: '', fl: '', t: '+', length: '40' }
    ]
  }
};

const Index = () => {
  const [variant, setVariant] = useState(2);
  const currentData = variantData[variant as keyof typeof variantData];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-4 mb-8">
          <Button 
            onClick={() => setVariant(1)} 
            variant={variant === 1 ? "default" : "outline"}
            className="px-8"
          >
            Вариант 1
          </Button>
          <Button 
            onClick={() => setVariant(2)} 
            variant={variant === 2 ? "default" : "outline"}
            className="px-8"
          >
            Вариант 2
          </Button>
          <Button 
            onClick={() => setVariant(3)} 
            variant={variant === 3 ? "default" : "outline"}
            className="px-8"
          >
            Вариант 3
          </Button>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Вариант {variant}</h1>
        
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <div className="border-2 border-gray-800 px-6 py-3 mb-8 bg-white">
              <span className="font-semibold">Концентратор 1</span>
            </div>

            <div className="flex justify-between w-full max-w-5xl relative mb-8">
              <div className="flex flex-col items-center w-1/3">
                <div className="h-16 w-0.5 bg-gray-800 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 1</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Концентратор 2</span>
                </div>
                
                <div className="h-16 w-0.5 bg-gray-800 mt-2 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 4</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Концентратор 5</span>
                </div>

                <div className="h-16 w-0.5 bg-gray-800 mt-2 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 7</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Узел 1</span>
                </div>
              </div>

              <div className="flex flex-col items-center w-1/3">
                <div className="h-16 w-0.5 bg-gray-800 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 2</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Концентратор 3</span>
                </div>

                <div className="h-16 w-0.5 bg-gray-800 mt-2 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 5</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Концентратор 6</span>
                </div>

                <div className="h-16 w-0.5 bg-gray-800 mt-2 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 8</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Узел 2</span>
                </div>
              </div>

              <div className="flex flex-col items-center w-1/3">
                <div className="h-16 w-0.5 bg-gray-800 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 3</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Концентратор 4</span>
                </div>

                <div className="h-16 w-0.5 bg-gray-800 mt-2 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 6</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Концентратор 7</span>
                </div>

                <div className="h-16 w-0.5 bg-gray-800 mt-2 mb-2"></div>
                <span className="text-sm mb-2 text-gray-600">Сегмент 9</span>
                <div className="border-2 border-gray-800 px-6 py-3 bg-white">
                  <span className="font-semibold">Узел 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              {currentData.segments.map((segment, index) => (
                <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="border-2 border-gray-800 px-4 py-3 font-medium">{segment.name}</td>
                  <td className="border-2 border-gray-800 px-4 py-3 text-center">{segment.fb}</td>
                  <td className="border-2 border-gray-800 px-4 py-3 text-center">{segment.fl}</td>
                  <td className="border-2 border-gray-800 px-4 py-3 text-center">{segment.t}</td>
                  <td className="border-2 border-gray-800 px-4 py-3 text-center">{segment.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
