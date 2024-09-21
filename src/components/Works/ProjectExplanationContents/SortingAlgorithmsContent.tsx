import { getLanguageAllDictionary } from "@/lang/lang"


export default function SortingAlgorithmsContent({lang}:{lang:string}) {

    const dict = getLanguageAllDictionary(lang).Works
    
    return (
        <div className="hide_scrollbar" style={{ width: '100%', padding: '50px', color: 'white', overflowY: 'auto'}}>
            {dict.sorting_algorithms_project_content.content}
            <iframe style={{
                backgroundColor: 'white',
                borderColor: 'white',
                borderStyle: 'none',
                borderRadius: '25px',
                width: '100%',
                minHeight: '400px'
                }} src="https://jaume2000.github.io/SortingAlgorithms/"></iframe>

        </div>
    )
}