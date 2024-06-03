import { NextRequest, NextResponse } from "next/server";

const BANNED_COUNTRIES = ["UK"];
const BANNED_IPS = ["84.232.178.87"];

export async function GET(request: NextRequest){
    // as per documentation, but this seems to be empty
    let ip = request.ip;
    let geoCountry = request.geo?.country;

    // so let"s use an external service for testing purposes
    const res = await fetch("https://geolocation-db.com/json/");
    const { country_code, IPv4 } = await res.json();
    ip = IPv4;
    geoCountry = country_code;

    if (!geoCountry && !ip) {
      return NextResponse.json({ valid: false });
    }
    if ((geoCountry && BANNED_COUNTRIES.indexOf(geoCountry) > -1) || (ip && BANNED_IPS.indexOf(ip) > -1)) {
      return NextResponse.json({ valid: false });
    }
    return NextResponse.json({ valid: true });
}