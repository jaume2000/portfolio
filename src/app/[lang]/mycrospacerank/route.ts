import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const url = process.env.GOOGLE_CLOUD_TAGGING_RANKING || 'https://europe-west9-mycrospace.cloudfunctions.net/check_tagging_ranking';
    
    // Realizar la solicitud con axios
    const response = await axios.get(url);
    
    // Obtenemos los datos de la respuesta directamente desde el objeto response
    const data = response.data;

    console.log(data);

    // Retornar la respuesta como JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);

    // Si hay un error, retornamos un mensaje de error
    return NextResponse.json({ error}, { status: 500 });
  }
}
