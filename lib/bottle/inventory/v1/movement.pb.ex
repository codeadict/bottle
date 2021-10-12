defmodule Bottle.Inventory.V1.Movement do
  @moduledoc false
  use Protobuf, syntax: :proto3

  @type t :: %__MODULE__{
          id: String.t(),
          part: Bottle.Inventory.V1.Part.t() | nil,
          from_location: Bottle.Inventory.V1.Location.t() | nil,
          to_location: Bottle.Inventory.V1.Location.t() | nil,
          created_at: String.t()
        }
  defstruct [:id, :part, :from_location, :to_location, :created_at]

  field(:id, 1, type: :string)
  field(:part, 2, type: Bottle.Inventory.V1.Part)
  field(:from_location, 3, type: Bottle.Inventory.V1.Location)
  field(:to_location, 4, type: Bottle.Inventory.V1.Location)
  field(:created_at, 5, type: :string)
end
