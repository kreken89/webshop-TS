import  { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
  description: string;
};

// const initState: ProductType[] = []
const initState: ProductType[] = [
  {
    sku: "elon",
    name: "Elon Musk",
    price: 200,
    description: "Ingen människa präglar vår tid lika definitivt som technörden och företagsledaren Elon Musk. I den här boken skildras den trotsige visionären och innovatören som lotsat världen in i elbilarnas, den privata rymdkapplöpningens och den artificiella intelligensens tidevarv. Ja, och så tog han ju över Twitter – och döpte om det till X. I två år har Isaacson följt Musk som en skugga, suttit med på hans möten, gått fabriksronderna och ägnat timme efter timme åt att intervjua Elon själv, hans släkt och vänner samt hans medarbetare och motståndare. Resultatet är en avslöjande skildring från insidan, fylld till brädden av fantastiska berättelser om triumfer och katastrofer, som får oss att ställa frågan: Är de demoner som driver Musk helt enkelt det som krävs för att driva innovation och framsteg?",
  },
  {
    sku: "zlatan",
    name: "Jag är Zlatan : Min historia",
    price: 300,
    description: "Jag är Zlatan är en av de största boksuccérna någonsin i Sverige. Med sina egna ord målar Zlatan upp bilden av den talangfulla lilla pojken i Rosengård som tidigt kom att bli en av världens bästa fotbollsspelare. Boken om Zlatan är en blivande svensk läsklassiker som kommer att förändra Sverige ... Det är så bra. Det är så förbannat bra.... En barndomsskildring som är ett mästerverk.",  
  },
  {
    sku: "zlatan2",
    name: "Adrenalina : mina okända berättelser",
    price: 250,
    description: "Det här är inte ett evangelium utan en 40-årig mans dagbok. En man som gör upp med sitt förflutna och ser framtiden rakt i ögonen som om den vore ännu en motståndare att möta i närkamp.I Adrenalina – Mina okända berättelser talar Zlatan Ibrahimovic öppet och ärligt om fotbollen, oron för framtiden och om den svåra konsten att låta adrenalin och balans ta lika stor plats såväl i vardagen som på fotbollsplanen. Jag är Zlatan utkom 2011, har översatts till 30 språk världen över och sålt i miljontals exemplar.",
  },
  {
    sku: "holly",
    name: "Holly",
    price: 100,
    description: "En lyckosam blandning av deckare och skräck, som cirklar kring det positiva skrivandet, det outhärdliga åldrandet och den ofullkomliga människans strävan. Dagens Nyheter. Jorge Castro avbryter sin joggingtur för att hjälpa ett äldre par i nöd, men blir överraskad av ett nålstick i nacken. Castro är bara ett i en rad av offer vars liv fått samma mardrömslika slut. Privatdetektiven Holly Gibney blir kontaktad av mamman till en ung kvinna som försvunnit i samma kvarter, och kommer två människor på spåren, vars gärningar inte kan beskrivas som annat än monstruösa.",
  },
  {
    sku: "saga",
    name: "En saga",
    price: 250,
    description: "Sjuttonårige Charlie Reade kommer till undsättning när hans granne, den buttre och hemlighetsfulle mr Bowditch, fallit och skadat sig illa. De blir vänner, men Charlie måste lova att hålla sig borta från det mystiska skjulet i trädgården. Vad är det som väntar på andra sidan skjulets tillbommade dörrar? Med hunden Radar vid sin sida ger sig Charlie ut på ett lika hisnande som skrämmande äventyr.",
  },
  {
    sku: "senare",
    name: "Senare",
    price: 250,
    description: "Ibland betyder ”växa upp” att du måste möta dina demoner. Jamie Conklin, son till en ensamstående, hårt arbetande mor, vill bara ha en vanlig och normal barndom. Men Jamie är inte ett vanligt barn – han ser vad ingen annan kan se och vet saker som ingen annan kan veta. Och priset han får betala för att hjälpa polisen jaga en mördare från andra sidan graven är högre än han någonsin kunnat föreställa sig.",
  },
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type childrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: childrenType): ReactElement => {
        const [products, setProducts] = useState<ProductType[]>(initState)

        // useEffect(() => {
        //     const fetchProducts = async (): Promise<ProductType[]> => {
        //         const data = await fetch("https://localhost:3500/products").then(res => {
        //             return res.json()
        //         }).catch(err => {
        //             if (err instanceof Error) {
        //                 console.log(err.message)
        //             }
        //         })
        //         return data
        //     }

        //     fetchProducts().then(products => setProducts(products))
        // }, [])

        return (
            <ProductsContext.Provider value={{ products }}>
                {children}
            </ProductsContext.Provider>
        )
    }

export default ProductsContext


