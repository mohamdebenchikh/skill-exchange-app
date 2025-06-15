import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("existing");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvc: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div 
      className="flex flex-col flex-1 w-full"
    >
      {/* Header */}
      <AppHeader title="Payment" />
      
      {/* Booking Summary */}
      <Card className="mx-4 mt-4">
        <CardHeader>
          <CardTitle className="text-lg">Booking Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid gap-2">
            <p className="font-medium">Photography Session with Sarah</p>
            <p className="text-muted-foreground text-sm">$50 · 1 hour</p>
          </div>
          <div className="pt-2 border-t">
            <p className="text-sm">Session Date: July 20, 2024</p>
            <p className="text-sm">Session Time: 2:00 PM - 3:00 PM</p>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card className="mx-4 mt-4">
        <CardHeader>
          <CardTitle className="text-lg">Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            value={paymentMethod} 
            onValueChange={setPaymentMethod}
            className="space-y-3"
          >
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="existing" id="existing-card" />
              <Label htmlFor="existing-card" className="flex-1 py-3">
                **** **** **** 1234
              </Label>
            </div>
            
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="new" id="new-card" />
              <Label htmlFor="new-card" className="flex-1 py-3">
                Add New Card
              </Label>
            </div>
          </RadioGroup>

          {/* New Card Form - Only shown when "Add New Card" is selected */}
          {paymentMethod === "new" && (
            <div className="mt-4 space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  name="number"
                  placeholder="**** **** **** ****"
                  value={cardDetails.number}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    name="cvc"
                    placeholder="CVC"
                    value={cardDetails.cvc}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pay Now Button */}
      <div className="p-4 mt-auto">
        <Button className="w-full">
          Pay Now
        </Button>
      </div>
    </div>
  );
}