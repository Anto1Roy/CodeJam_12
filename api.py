import requests
import json
from bs4 import BeautifulSoup

URL = "http://api.endlessmedical.com/v1/dx"

def main():
    request = requests.get(f"{URL}/InitSession")
    id = eval(request.content)['SessionID']
    terms = requests.post(f"{URL}/AcceptTermsOfUse?SessionID={id}&passphrase=I%20have%20read,%20understood%20and%20I%20accept%20and%20agree%20to%20comply%20with%20the%20Terms%20of%20Use%20of%20EndlessMedicalAPI%20and%20Endless%20Medical%20services.%20The%20Terms%20of%20Use%20are%20available%20on%20endlessmedical.com")

    cough_lvl = 1
    cough = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=SeverityCough&value={cough_lvl}")
    temp_lvl = 1
    temp = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=Temp&value={temp_lvl}")
    heart_rate = 1
    heart = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=HeartRate&value={heart_rate}")
    headache_lvl = 0
    headache = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=HeadacheIntensity&value={headache_lvl}")
    sore_throat = 0
    soreness = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=SoreThroatROS&value={sore_throat}")
    nausea1 = 0
    nausea = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=Nausea&value={nausea1}")
    chestp = 0
    chestpain = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=ChestPainSeverity&value={chestp}")
    constipation = 0
    const = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=Constipation&value{constipation}")
    weightgain = 0
    weightg = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=WeightGain&value={weightgain}")
    weightloss = 0
    weightl = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=WeightLoss&value={weightloss}")
    fatiguelvl = 0
    fatigue = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=GeneralizedFatigue&value={fatiguelvl}")
    lossofs = 0
    lossofsmell = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=LossOfSmell&value={lossofs}")
    lossoft = 0
    lossoftaste = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=LossOfTaste&value={lossoft}")
    nasalcong = 0
    nasalcongestion = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=RunnyNoseCongestion&value={nasalcong}")
    dryeyes = 0
    dryness = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=DryEyes&value={dryeyes}")
    vomit = 0
    vomiting = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=Vomiting&value={vomit}")
    sex = 0
    sexactive = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=SexActive&value={sex}")
    exposure = 0
    covid = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=ExposureToCovid&value={exposure}")
    diarrhea = 0
    dia = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=ChronicDiarrheaSx&value={diarrhea}")
    swallow = 0 
    spain = requests.post(f"{URL}/UpdateFeature?SessionID={id}&name=SwallowPain&value={swallow}")
    
    '''
    analyze = requests.get(f"{URL}/Analyze?SessionID={id}")
    for i in range(0,5):
        print(eval(analyze.content)["Diseases"][i])
    tests = requests.get(f"{URL}/GetSuggestedTests?SessionID={id}")
    '''
if __name__ == '__main__':
    main()