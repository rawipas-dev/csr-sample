import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json([
    {
      id: 1,
      title: "Blog 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis turpis. Donec malesuada pellentesque est luctus sagittis. Sed imperdiet metus fermentum risus scelerisque iaculis.",
    },
    {
      id: 2,
      title: "Blog 2",
      content:
        "Morbi sed dolor felis. Curabitur leo mi, luctus accumsan pulvinar et, rhoncus vel velit. Proin erat massa, tempor vitae sodales non, lobortis at ligula. Curabitur felis massa, iaculis ac hendrerit vel, egestas eu leo.",
    },
    {
      id: 3,
      title: "Blog 3",
      content:
        "Nullam interdum odio nisi, at varius erat rutrum eu. Integer tincidunt mollis augue quis semper. Fusce eu risus eget nulla sodales aliquet eu vulputate diam.",
    },
  ]);
}
