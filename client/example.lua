Citizen.CreateThread(function()
    local coords = vec3(231.5371, -801.0135, 29.53)

    while true do
        if #(GetEntityCoords(PlayerPedId()) - coords) <= 5.0 then
            DrawMarker(6, coords, 0.0, 0.0, 0.0, 270.0, 0.0, 0.0, 2.0, 2.0, 2.0, 63, 148, 236, 175, false, true, 2, false, nil, nil, false)
            showTextUI("textui_test", "Five Developments", "E")
            showTextUI("textui_test2", "Press me", "G")
            if IsControlJustPressed(0, 38) then
                print("You've clicked E!")
            end
            if IsControlJustPressed(0, 47) then
                print("You've clicked G!")
            end
        else
            hideTextUI("textui_test")
            hideTextUI("textui_test2")
            Wait(500)
        end
        Wait(0)
    end
end)
