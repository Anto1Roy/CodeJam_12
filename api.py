import requests
import json

URL = "http://api.endlessmedical.com/v1/dx"

def main():
    request = requests.get(f"{URL}/InitSession")
    id = eval(request.content)['SessionID']
    terms = requests.post(f"{URL}/AcceptTermsOfUse?SessionID={id}&passphrase=I%20have%20read,%20understood%20and%20I%20accept%20and%20agree%20to%20comply%20with%20the%20Terms%20of%20Use%20of%20EndlessMedicalAPI%20and%20Endless%20Medical%20services.%20The%20Terms%20of%20Use%20are%20available%20on%20endlessmedical.com")
    

    cough_lvl = input("Severity of Cough on a scale of 1 to 10")
    cough = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=SeverityCough&value={cough_lvl}")
    analyze = requests.get(f"{URL}/Analyze?SessionID={id}")
    print(eval(analyze.content)["Diseases"])
if __name__ == '__main__':
    main()