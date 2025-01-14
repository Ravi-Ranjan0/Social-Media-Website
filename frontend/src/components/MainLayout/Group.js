import React from "react";
import { BsThreeDots } from "react-icons/bs";

const people = [
  {
    name: "PickoLab Studio",
    imageUrl:
      "data:image/png;base64,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",
  },
  {
    name: "Aksantara Digital",
    imageUrl: "https://aksantara.com/assets/rounded-logo.svg",
  },
  {
    name: "Design Jam Indonesia",

    imageUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAM1BMVEUAAAD///9AQEBgYGAgICDf398QEBDv7++AgICfn58wMDC/v79QUFDPz89vb2+QkJCvr6+l/fV8AAAFJElEQVR4nO2d2ZKsIAyGEQX35f2fdlxAEVnS3USYKv67U2UNX4ewhZBDCl11Ow0VJ++rolPLHjhEo2toBDRFnc5I7ngxLKerZDbAJPA2NUZA1sXmulSxJ2Cbivl28UUHbGIj6WrugMnxnYQH4BKbxqT2AmRJ+Z8UZydgFZvFrE4CJuiAh5oDkMXmsIrXO2AZm8OuZgNM14C7CUnRxqZwqVkBE1qCn6IFSbmHV9Uk6R5elxMyxUZwayKRt/g+DSTRZU4qcbx1JowNkJWVlZWVlZX1nroSLkrf3yipgVmI6n4e3txvVh/yHWLta2eK8ivAjbF5x45fA65q30D8BfAVxN8AX0CkRzu+UI74bBqmdrwTMuQ4nxjFvlYE4D52+XC/ecO9i+HCNB8A7v9uVSOidvNhDF+wSQdcTa+YsR4QAfvDCB8DboiXEREj9vPRgsePTIAr4vgC4QAaJWZAdSVHIxSjxOOENkDlihWN8HDC2t3HVkClm7EmRNFL7oFoB5TXg+tvRArci7Z7yEfmTZYkxLq97F2NCzkBT0Kk0P0E+OtuQPkbPX7yrbbLvU2uBcsDyMVY9gy1b9X4vdADSDrxI2cEvHMqdHmhD1D6CdIV3OwdhV5A6YbuyeBbcW8H+QHl8RDnuCeXVOso9APKbsAxIZGj0DaSAYCyG3AGMpWLgYUQACi7AWnTIDqoGM0GgAAKE9YofNdiYCaEAJIFc5hcGztjL4MAKeZkfS0GRkIQIDn+Alo6ghwoRf08hMIAhSOjnUKvMMgjoAEDFF/hxRouQj2gAQPkuE5IFD9cR/MNBgZIjvPJiAeo5sEWvYIDBGxRZ8KDcLkI146WvggEFJsu3Ej7PareH0nsQEARBQi7KeQdvesR0xyXRlBP1C1hwaBHk6HWeX5XyHmmQuALCjgg8AUF/DWIngH/C6Bn+qCfTTMht6wC0PdZA2sZYaIGAgJ38whLHRBwhAEibBaAgAUM8PgdQc/uMEAKA8TYsMIAGxigGCNB9wowwB4GKELBQQ9NIMAzscEDeGzHwx47QYAlDFB4athQOgiQwQDb8OsIDPA80bvbFo4QOLAAAexhgMKAgcNvAMDLgE5AeWINHPgAAI4wwBZjiEAA1R0jIIgeOnLkBVRjDS7AEceAfkA1vcMBKBfD4KE3H+BUgABlB4e/7/QAasdmG6D0A4QMGjfg6YClG1AOdITQpRNQ3rIWTbwLbRcgl4ZZIqYEOADPfI7Vs0BJFSjBczvg6X9bw3ZAfq7UOPkAVsArLLedcq2AHXZijwWQy7s7MTJtgFONzGcBpOzOZ0suuzZiaIlRJkCl3VogmQAVKyMmvz0B1eTKs1LIE5A31yJTI+axaoB8uKxXFP05cTxSRBdlDUQteKIC8rK9Lb3KneItyZbOt89wk2wFYFc+Cv8w1eHsacqo+avkvl++tXt3e2r5rJix329YAPV2LYA9/lt/E6ChSJIRsA97RIcC9pOh1zrIr0CR1nJvKYDF7ztrNr/3iP683GTLPDiyyyRhPc7lu0/Uq/01lbeqWTWsnw1dfp2elZWVlZWVlbUp+V1R4lWPKoJ8WP1VNP3CYMmXVkPNc/1djGBl/IdRV5B0S3RualdApBduYcS2Ip0Jm7Dcq4gmbEL2PwrFYj0S/Fn71fL/KFacZi3WI5fznxTMTpBQKzleFEtSfsjPSyyl7H1CW9fOUPY+oW7m5v84oMAvWQOSeveoA25VqCJP2rTRnq1ogDvjRGO4I6+GqX0+qvkDK+cfUwRt5/oAAAAASUVORK5CYII=",
  },
  {
    name: "Dribble",
    imageUrl:
      "data:image/png;base64,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",
  },
];
const Group = () => {
  return (
    <>
      <div className="bg-white rounded-lg w-full p-4 basis-1/12">
        <div className="flex py-2 place-content-between">
          <div className="uppercase text-slate-300">My Group</div>
          <div className="float-right">
            <BsThreeDots />
          </div>
        </div>
        <div className="py-4">
          {people.map((person) => (
            <li className="flex justify-between gap-x-6 py-2">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-8 w-8 flex-none rounded bg-gray-50"
                  src={person.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.name}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Group;
