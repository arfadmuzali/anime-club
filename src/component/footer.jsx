import { Divider, VStack, Image, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Divider />
      <div className="md:mx-28 flex flex-col md:flex-row md:justify-around mb-4 mt-2">
        <div className="mb-5">
          <VStack>
            <h1 className="text-lg text-orange-500">Social Media</h1>
            <div>
              <Link
                href="https://www.facebook.com/arfad.muzali"
                className="flex gap-1 text-sm hover:text-orange-200"
                target="_blank"
                color={"white"}
              >
                Facebook
                <svg
                  width="13.5"
                  height="13.5"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                  ></path>
                </svg>
              </Link>
            </div>

            <div>
              <Link
                href="https://www.instagram.com/arfadmuzali/"
                className="flex gap-1 text-sm hover:text-orange-200"
                target="_blank"
                color={"white"}
              >
                Instagram
                <svg
                  width="13.5"
                  height="13.5"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                  ></path>
                </svg>
              </Link>
            </div>
          </VStack>
        </div>
        <div className="">
          <VStack>
            <h1 className="text-lg text-orange-500">More</h1>
            <div>
              <Link
                href="https://github.com/arfadmuzali"
                className="flex gap-1 text-sm hover:text-orange-200"
                target="_blank"
                color={"white"}
              >
                GitHub
                <svg
                  width="13.5"
                  height="13.5"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                  ></path>
                </svg>
              </Link>
            </div>

            <div>
              <Text className="flex gap-1 text-sm" color={"white"}>
                arfadmuzali258@gmail.com
              </Text>
            </div>
          </VStack>
        </div>
      </div>
      <h2 className="text-orange-100 w-fit m-auto mb-4">
        Built with Love by Arfad Muzali.
      </h2>
    </>
  );
}
