import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const url = 'https://europe-west9-mycrospace.cloudfunctions.net/check_tagging_ranking';
    
    // Realizar la solicitud con axios
    const response = await axios.get(url);
    
    // Obtenemos los datos de la respuesta directamente desde el objeto response
    const data = response.data;

    console.log(data);

    let processed_data = []

    const contacts: { [email: string]: string } = {
      "juliams2707@gmail.com": "Júlia Molina Sánchez",
      "andrgope05@gmail.com": "Andrés Gómez Peiró",
      "mathiasbernb@gmail.com": "Mathias Bern",
      "mariajosevp2005@gmail.com": "María José Vila Pastor",
      "eliasdlpmu@gmail.com": "Elias de la Peña Muñoz",
      "mariasc453@gmail.com": "Maria Salcedo Ciscar",
      "sergioariasmass@gmail.com": "Sergio Arias Galiano",
      "leyre.roca326@gmail.com": "Leyre Roca",
      "yoliversal2002@gmail.com": "Yolanda Vera Salmerón",
      "hernandezsorianocarlos@gmail.com": "Carlos Hernández Soriano",
      "alicianavarronupv@gmail.com": "Alicia Navarro Navarro",
      "lara.uniupv@gmail.com": "Lara Barona Pinilla",
      "lotfiomar2501@gmail.com": "Omar Loft-Allah",
      "jcarpinterobasalo@gmail.com": "Judith Carpintero Basalo",
      "iratxegb133@gmail.com": "Iratxe García Bascuñan",
      "claudiaherrerop@gmail.com": "Claudia (literalmente mi madre)",
      "david.degois.suarez@gmail.com": "David de Gois Suarez",
      "jaumeig95@gmail.com": "Jaume Ivars (el vago que no taggea)",
    };
    


    for (let i = 0; i < data.length; i++) {
      let element = data[i];
      if (element[0] in contacts) {
        element[0] = contacts[element[0]];
      }
      processed_data.push([element[0], element[1]]);
    }

    // Retornar la respuesta como JSON
    return NextResponse.json(processed_data);
  } catch (error) {
    console.error('Error fetching data:', error);

    // Si hay un error, retornamos un mensaje de error
    return NextResponse.json({ error}, { status: 500 });
  }
}
