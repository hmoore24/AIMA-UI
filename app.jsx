import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/multiselect";

export default function AIMAUI() {
  const symptomOptions = [
    "Fever", "Chills", "Headache", "Vision changes", "Swelling",
    "Nausea", "Vomiting", "Diarrhea", "Abdominal pain",
    "Productive cough", "Non-productive cough", "Congestion",
    "Runny nose", "Rash", "Redness", "Neck pain",
    "Joint pain", "Joint swelling"
  ];

  return (
    <main className="min-h-screen bg-[#f6f4f0] text-gray-900 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-[#003366]">🧠 AIMA</h1>
        <h2 className="text-xl font-semibold mb-6 text-[#336699]">AI Infection Management Assistant</h2>

        <Tabs defaultValue="clinical">
          <TabsList className="flex gap-2 mb-4">
            <TabsTrigger value="clinical" className="bg-white text-[#003366] border border-[#336699] px-4 py-2 rounded-xl">Clinical Presentation</TabsTrigger>
            <TabsTrigger value="labs" className="bg-white text-[#003366] border border-[#336699] px-4 py-2 rounded-xl">Labs</TabsTrigger>
            <TabsTrigger value="imaging" className="bg-white text-[#003366] border border-[#336699] px-4 py-2 rounded-xl">Imaging</TabsTrigger>
            <TabsTrigger value="summary" className="bg-white text-[#003366] border border-[#336699] px-4 py-2 rounded-xl">Summary</TabsTrigger>
          </TabsList>

          <TabsContent value="clinical">
            <Card className="bg-white shadow-md rounded-2xl p-6 mb-6">
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Age" className="border border-[#cccccc] p-2 rounded" />

                  <div className="border border-[#cccccc] p-2 rounded">
                    <Label className="text-sm text-gray-700 mb-2 block">Sex</Label>
                    <RadioGroup defaultValue="unspecified" className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unspecified" id="unspecified" />
                        <Label htmlFor="unspecified">Unspecified</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div>
                  <Label className="text-sm text-gray-700 mb-2 block">Symptoms</Label>
                  <MultiSelect
                    options={symptomOptions.map(symptom => ({ label: symptom, value: symptom }))}
                    placeholder="Select symptoms"
                    className="border border-[#cccccc] rounded"
                  />
                </div>

                <Textarea placeholder="Physical Exam Findings" className="border border-[#cccccc] p-2 rounded" />

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <Input placeholder="Temp (°F/°C)" className="border border-[#cccccc] p-2 rounded" />
                  <Input placeholder="BP" className="border border-[#cccccc] p-2 rounded" />
                  <Input placeholder="HR" className="border border-[#cccccc] p-2 rounded" />
                  <Input placeholder="RR" className="border border-[#cccccc] p-2 rounded" />
                  <Input placeholder="SpO2" className="border border-[#cccccc] p-2 rounded" />
                </div>

                <Textarea placeholder="Past Medical History" className="border border-[#cccccc] p-2 rounded" />
                <Textarea placeholder="Allergies" className="border border-[#cccccc] p-2 rounded" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="labs">
            <Card className="bg-white shadow-md rounded-2xl p-6 mb-6">
              <CardContent className="grid gap-4">
                <Textarea placeholder="CBC, BMP, LFTs, RPP, UA" className="border border-[#cccccc] p-2 rounded" />
                <Textarea placeholder="Culture Data (Sputum, Blood, Urine, CSF, etc)" className="border border-[#cccccc] p-2 rounded" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="imaging">
            <Card className="bg-white shadow-md rounded-2xl p-6 mb-6">
              <CardContent className="grid gap-4">
                <Textarea
                  className="border border-[#cccccc] p-2 rounded"
                  defaultValue={`Findings:
- Lung fields: Clear / Infiltrate / Consolidation / Effusion / Atelectasis
- Heart size: Normal / Enlarged
- Pleural spaces: Normal / Effusion
- Devices: None / Central line / ET tube / NG tube

Impression:
- Consistent with [Pneumonia / CHF / COPD exacerbation / Normal]`}
                />
                <Textarea
                  className="border border-[#cccccc] p-2 rounded"
                  defaultValue={`Region: [Chest / Abdomen / Head / etc.]

Findings:
- Lung parenchyma: ...
- Lymphadenopathy: ...
- Pleural findings: ...
- Abdominal organs: ...
- Free air/fluid: ...
- Other: ...

Impression: ...`}
                />
                <Textarea
                  className="border border-[#cccccc] p-2 rounded"
                  defaultValue={`Region: [Brain / Spine / Joint]

Findings:
- Signal changes: ...
- Masses or lesions: ...
- Edema or inflammation: ...
- Vascular abnormalities: ...

Impression: ...`}
                />
                <Textarea
                  className="border border-[#cccccc] p-2 rounded"
                  defaultValue={`Organ/System: [Gallbladder / Kidney / Bladder / Pelvis / Heart]

Findings:
- Size: ...
- Echogenicity: ...
- Fluid collections: ...
- Vascularity: ...
- Doppler: ...

Impression: ...`}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="summary">
            <Card className="bg-white shadow-md rounded-2xl p-6">
              <CardContent className="grid gap-4">
                <p className="text-sm text-gray-700">Once all data is entered, click below to generate infection assessment and recommendations.</p>
                <Button className="bg-[#003366] text-white rounded-xl py-2 px-6 hover:bg-[#002244]">Generate Recommendations</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
