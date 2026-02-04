import { NextResponse } from 'next/server'

export async function GET() {
  console.log('📋 Tracegrid version check requested at', new Date().toISOString())
  
  const versionData = {
    version: "1.0.0",
    versionCode: 1,
    releaseDate: "2025-01-29",
    downloadUrl: "https://muhtadi.dev/api/tracegrid/download",
    changelog: [
      "Initial release",
      "Basic functionality implemented"
    ],
    minAndroidVersion: "8.0",
    fileSize: "15.2 MB",
    md5: "",
    sha256: "",
    mandatory: false,
    releaseNotes: {
      en: "Initial release with core features",
      id: "Rilis awal dengan fitur utama"
    }
  }

  return NextResponse.json(versionData, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  })
}
