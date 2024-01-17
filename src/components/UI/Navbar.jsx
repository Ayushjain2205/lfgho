import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const isActive = (route) => router.pathname === route;

  return (
    <div className="fixed inset-x-0 bottom-0 ">
      <nav className="flex justify-between h-[60px] items-center px-[27px] border border-t-[#4D9C7D] bg-white">
        <Link href="/" className="text-center flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              isActive("/") ? "text-[#4D9C7D]" : "text-black"
            }`}
            viewBox="0 0 25 25"
            fill="currentColor"
          >
            <path d="M10.4004 21.9208V16.6633C10.4004 16.2958 10.7754 15.9208 11.1504 15.9208H14.1504C14.5254 15.9208 14.9004 16.2958 14.9004 16.6708V21.9208C14.9004 22.1197 14.9794 22.3105 15.1201 22.4511C15.2607 22.5918 15.4515 22.6708 15.6504 22.6708H21.6504C21.8493 22.6708 22.0401 22.5918 22.1807 22.4511C22.3214 22.3105 22.4004 22.1197 22.4004 21.9208V11.4208C22.4006 11.3222 22.3813 11.2246 22.3437 11.1335C22.3062 11.0424 22.251 10.9596 22.1814 10.8898L20.1504 8.86027V3.92077C20.1504 3.72186 20.0714 3.5311 19.9307 3.39044C19.7901 3.24979 19.5993 3.17077 19.4004 3.17077H17.9004C17.7015 3.17077 17.5107 3.24979 17.3701 3.39044C17.2294 3.5311 17.1504 3.72186 17.1504 3.92077V5.86027L13.1814 1.88977C13.1117 1.81993 13.029 1.76452 12.9378 1.72671C12.8467 1.6889 12.749 1.66943 12.6504 1.66943C12.5517 1.66943 12.4541 1.6889 12.3629 1.72671C12.2718 1.76452 12.1891 1.81993 12.1194 1.88977L3.11939 10.8898C3.04979 10.9596 2.99462 11.0424 2.95704 11.1335C2.91947 11.2246 2.90022 11.3222 2.90039 11.4208V21.9208C2.90039 22.1197 2.97941 22.3105 3.12006 22.4511C3.26071 22.5918 3.45148 22.6708 3.65039 22.6708H9.65039C9.84931 22.6708 10.0401 22.5918 10.1807 22.4511C10.3214 22.3105 10.4004 22.1197 10.4004 21.9208Z" />
          </svg>
          <span
            className={`block w-[4px] h-[4px] rounded-full mt-1 ${
              isActive("/") ? "bg-[#4D9C7D]" : "bg-white"
            }`}
          />
        </Link>
        <Link href="/scan" className="text-center flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              isActive("/scan") ? "text-[#4D9C7D]" : "text-black"
            }`}
            viewBox="0 0 25 25"
            fill="currentColor"
          >
            <path d="M2.40039 1.6709C2.20148 1.6709 2.01071 1.74992 1.87006 1.89057C1.72941 2.03122 1.65039 2.22199 1.65039 2.4209V6.9209C1.65039 7.11981 1.57137 7.31058 1.43072 7.45123C1.29007 7.59188 1.0993 7.6709 0.900391 7.6709C0.701478 7.6709 0.510713 7.59188 0.370061 7.45123C0.229408 7.31058 0.150391 7.11981 0.150391 6.9209V2.4209C0.150391 1.82416 0.387443 1.25187 0.8094 0.829908C1.23136 0.407951 1.80365 0.170898 2.40039 0.170898L6.90039 0.170898C7.0993 0.170898 7.29007 0.249916 7.43072 0.390568C7.57137 0.531221 7.65039 0.721986 7.65039 0.920898C7.65039 1.11981 7.57137 1.31058 7.43072 1.45123C7.29007 1.59188 7.0993 1.6709 6.90039 1.6709H2.40039ZM16.6504 0.920898C16.6504 0.721986 16.7294 0.531221 16.8701 0.390568C17.0107 0.249916 17.2015 0.170898 17.4004 0.170898L21.9004 0.170898C22.4971 0.170898 23.0694 0.407951 23.4914 0.829908C23.9133 1.25187 24.1504 1.82416 24.1504 2.4209V6.9209C24.1504 7.11981 24.0714 7.31058 23.9307 7.45123C23.7901 7.59188 23.5993 7.6709 23.4004 7.6709C23.2015 7.6709 23.0107 7.59188 22.8701 7.45123C22.7294 7.31058 22.6504 7.11981 22.6504 6.9209V2.4209C22.6504 2.22199 22.5714 2.03122 22.4307 1.89057C22.2901 1.74992 22.0993 1.6709 21.9004 1.6709H17.4004C17.2015 1.6709 17.0107 1.59188 16.8701 1.45123C16.7294 1.31058 16.6504 1.11981 16.6504 0.920898ZM0.900391 16.6709C1.0993 16.6709 1.29007 16.7499 1.43072 16.8906C1.57137 17.0312 1.65039 17.222 1.65039 17.4209V21.9209C1.65039 22.1198 1.72941 22.3106 1.87006 22.4512C2.01071 22.5919 2.20148 22.6709 2.40039 22.6709H6.90039C7.0993 22.6709 7.29007 22.7499 7.43072 22.8906C7.57137 23.0312 7.65039 23.222 7.65039 23.4209C7.65039 23.6198 7.57137 23.8106 7.43072 23.9512C7.29007 24.0919 7.0993 24.1709 6.90039 24.1709H2.40039C1.80365 24.1709 1.23136 23.9338 0.8094 23.5119C0.387443 23.0899 0.150391 22.5176 0.150391 21.9209L0.150391 17.4209C0.150391 17.222 0.229408 17.0312 0.370061 16.8906C0.510713 16.7499 0.701478 16.6709 0.900391 16.6709ZM23.4004 16.6709C23.5993 16.6709 23.7901 16.7499 23.9307 16.8906C24.0714 17.0312 24.1504 17.222 24.1504 17.4209V21.9209C24.1504 22.5176 23.9133 23.0899 23.4914 23.5119C23.0694 23.9338 22.4971 24.1709 21.9004 24.1709H17.4004C17.2015 24.1709 17.0107 24.0919 16.8701 23.9512C16.7294 23.8106 16.6504 23.6198 16.6504 23.4209C16.6504 23.222 16.7294 23.0312 16.8701 22.8906C17.0107 22.7499 17.2015 22.6709 17.4004 22.6709H21.9004C22.0993 22.6709 22.2901 22.5919 22.4307 22.4512C22.5714 22.3106 22.6504 22.1198 22.6504 21.9209V17.4209C22.6504 17.222 22.7294 17.0312 22.8701 16.8906C23.0107 16.7499 23.2015 16.6709 23.4004 16.6709Z" />
          </svg>
          <span
            className={`block w-[4px] h-[4px] rounded-full mt-1 ${
              isActive("/scan") ? "bg-[#4D9C7D]" : "bg-white"
            }`}
          />
        </Link>
        <Link href="/wallet" className="text-center flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              isActive("/wallet") ? "text-[#4D9C7D]" : "text-black"
            }`}
            viewBox="0 0 25 25"
            fill="currentColor"
          >
            <path d="M18.3544 0.661003C18.686 0.578058 19.0321 0.57175 19.3665 0.642558C19.7009 0.713366 20.0148 0.859428 20.2843 1.06966C20.5538 1.27989 20.7718 1.54875 20.9219 1.85585C21.072 2.16295 21.1501 2.5002 21.1504 2.842V4.672H21.9004C22.4971 4.672 23.0694 4.90906 23.4914 5.33101C23.9133 5.75297 24.1504 6.32527 24.1504 6.922V20.422C24.1504 21.0187 23.9133 21.591 23.4914 22.013C23.0694 22.435 22.4971 22.672 21.9004 22.672H2.40039C1.80365 22.672 1.23136 22.435 0.8094 22.013C0.387444 21.591 0.150391 21.0187 0.150391 20.422V6.922C0.150181 6.34278 0.373354 5.7858 0.773457 5.36697C1.17356 4.94815 1.71977 4.69976 2.29839 4.6735L18.3544 0.661003ZM8.49339 4.672H19.6504V2.842C19.6501 2.72821 19.624 2.61596 19.5739 2.51377C19.5239 2.41157 19.4512 2.32211 19.3614 2.25216C19.2717 2.1822 19.1672 2.13359 19.0559 2.11C18.9445 2.08641 18.8293 2.08846 18.7189 2.116L8.49339 4.672ZM2.40039 6.172C2.20148 6.172 2.01071 6.25102 1.87006 6.39167C1.72941 6.53233 1.65039 6.72309 1.65039 6.922V20.422C1.65039 20.6209 1.72941 20.8117 1.87006 20.9523C2.01071 21.093 2.20148 21.172 2.40039 21.172H21.9004C22.0993 21.172 22.2901 21.093 22.4307 20.9523C22.5714 20.8117 22.6504 20.6209 22.6504 20.422V6.922C22.6504 6.72309 22.5714 6.53233 22.4307 6.39167C22.2901 6.25102 22.0993 6.172 21.9004 6.172H2.40039Z" />
          </svg>
          <span
            className={`block w-[4px] h-[4px] rounded-full mt-1 ${
              isActive("/wallet") ? "bg-[#4D9C7D]" : "bg-white"
            }`}
          />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
