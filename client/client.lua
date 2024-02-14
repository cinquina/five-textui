local ids = {}

local function SendReactMessage(action, data)
    SendNUIMessage({action = action, data = data})
end

function showTextUI(id, label, keybind)
    if not ids[id] then
        SendReactMessage('showTextUI', {id = id, label = label, keybind = keybind})
        ids[id] = true
    end
end

function hideTextUI(id)
    if ids[id] then
        SendReactMessage('hideTextUI', {id = id})
        ids[id] = nil
    end
end

exports('showTextUI', showTextUI)
exports('hideTextUI', hideTextUI)
