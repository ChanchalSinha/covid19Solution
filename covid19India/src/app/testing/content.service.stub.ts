import { Observable } from 'rxjs';

export class ContentServiceStub {
  getContents() {
    return Observable.create({
        "AN": {
          "districts": {
            "North and Middle Andaman": {
              "meta": {
                "population": 105597
              },
              "total": {
                "confirmed": 1,
                "recovered": 1
              }
            },
            "South Andaman": {
              "meta": {
                "population": 238142
              },
              "total": {
                "confirmed": 51,
                "recovered": 32
              }
            },
            "Unknown": {
              "total": {
                "confirmed": 111,
                "recovered": 67
              }
            }
          },
          "meta": {
            "last_updated": "2020-07-12T21:07:14+05:30",
            "population": 397000,
            "tested": {
              "last_updated": "2020-07-12",
              "source": "https://dhs.andaman.gov.in/NewEvents/327.pdf"
            }
          },
          "total": {
            "confirmed": 163,
            "recovered": 100,
            "tested": 18447
          }
        }
    });
  }
}