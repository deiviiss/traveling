import CardTravel from '@common/CardTravel';

export default function Carrucel({ cards, title }) {
  return (
    <div className="px-2 md:px-6" id="recomendados">
      <p className="text-2xl font-semibold text-primary pb-2 mt-6 dark:text-white">{title}</p>
      <div className="w-auto h-80 items-center mt-1 overflow-x-auto overscroll-x-contain flex space-x-4 scrollbar">
        {/* component card no muestra background */}
        {/* {cards.map((card) => {
          return <CardTravel card={card} key={`place-${card.id}`} />;
        })} */}
        {/* En lugar del componente */}
        <div className="Card">
          <div className={`Card--cover bg-yosemite`}></div>
          <div className="Card--content text-white ">
            <p className="Card--content__title text-bold">Yosemite</p>
            <p className="Card--content__description">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="Card">
          <div className={`Card--cover bg-la`}></div>
          <div className="Card--content">
            <p className="Card--content__title text-bold">Los Angeles</p>
            <p className="Card--content__description">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="Card">
          <div className={`Card--cover bg-seattle`}></div>
          <div className="Card--content text-white ">
            <p className="Card--content__title text-bold">Seattle</p>
            <p className="Card--content__description">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="Card">
          <div className={`Card--cover bg-new_york`}></div>
          <div className="Card--content">
            <p className="Card--content__title text-bold">Nueva York</p>
            <p className="Card--content__description">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="Card">
          <div className={`Card--cover bg-yosemite`}></div>
          <div className="Card--content text-white ">
            <p className="Card--content__title text-bold">Yosemite</p>
            <p className="Card--content__description">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="Card">
          <div className={`Card--cover bg-sydney`}></div>
          <div className="Card--content">
            <p className="Card--content__title text-bold">Sydney</p>
            <p className="Card--content__description">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="Card">
          <div className={`Card--cover bg-miami`}></div>
          <div className="Card--content text-white ">
            <p className="Card--content__title text-bold">Miami</p>
            <p className="Card--content__description">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
