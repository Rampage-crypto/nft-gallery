import { FC, useState, useEffect } from "react";
import useSWR from "swr";
import { EyeOffIcon } from "@heroicons/react/outline";

import { fetcher } from "utils/fetcher";

type Props = {
  details: any;
  onSelect: (id: string) => void;
  onTokenDetailsFetched?: (props: any) => unknown;
};

export const NftCard: FC<Props> = ({
  details,
  onSelect,
  onTokenDetailsFetched = () => {},
}) => {
  const [fallbackImage, setFallbackImage] = useState(false);
  const { name, uri } = details?.data ?? {};

  const { data, error } = useSWR(
    // uri || url ? getMetaUrl(details) : null,
    uri,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  // console.log("data", data);

  useEffect(() => {
    if (!error && !!data) {
      onTokenDetailsFetched(data);
    }
  }, [data, error]);

  const onImageError = () => setFallbackImage(true);
  const { image } = data ?? {};

  return (
    <div className={`card bordered max-w-xs compact rounded-md transition duration-300 transform hover:opacity-75 cursor-pointer hover:scale-105`}>
      <figure className="min-h-16 animation-pulse-color">
        {!fallbackImage || !error ? (
          <img
            src={image}
            onError={onImageError}
            className="bg-gray-800 object-cover"
          />
        ) : (
          // Fallback when preview isn't available
          // This could be broken image, video, or audio
          <div className="w-auto h-48 flex items-center justify-center bg-gray-900 bg-opacity-40">
            <EyeOffIcon className="h-16 w-16 text-white-500" />
          </div>
        )}
      </figure>
      <div class="absolute top-2 right-2">
        <div class="flex flex-col">
          <div class="tooltip tooltip-left rounded-full" data-tip="Download">
            <div class="linear-gradient-puls-full-hover rounded-full p-px bg-black">
              <div className="App">
                <a href='apple-touch-icon' download target="_blank">
                  <button class="button button-primary text-white p-2 rounded-full text-xl flex items-center">
                    <svg xmlns="image" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="false"class="h-6 w-6 text-white-500">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4">                    
                      </path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title text-sm text-left">{name}</h2>
      </div>
    </div>
  );
};

